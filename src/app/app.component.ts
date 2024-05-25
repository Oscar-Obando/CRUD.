import { Component, OnInit } from '@angular/core';

import {UsuariosService} from './usuarios.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})

export class AppComponent implements OnInit {
  title = 'mi-primer-crud';
  usuarios: any[] = [];

  usuario = {
    idUsuario: null,
    nombre:null,
    telefono: null,
    direccion: null,
    email: null,
  }
 
  constructor(private usuariosServicio: UsuariosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuariosServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result,
      error => console.error(error)
    );
  }
  
  altaUsuario(){
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      },
      error => console.error(error)
    );
  }

  bajaUsuario(idUsuario: number){
    this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      },
      error => console.error(error)
    );
  }

  editarUsuario(){
    this.usuariosServicio.editarUsuario(this.usuarios).subscribe(
      datos => {
        if(datos['resultado'] === 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();
        }
      },
      error => console.error(error)
    );
  }

  seleccionarUsuario(idUsuario: number){
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuario = result[0],
      error => console.error(error)
    );
  }

  hayresgistros(){
    return this.usuarios && this.usuarios.length > 0;
  }
}
