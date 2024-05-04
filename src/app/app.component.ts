import { Component, OnInit } from '@angular/core';

import {UsuariosService} from './usuarios.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: ['./app.component.css']

})

export class AppComponent implements OnInit {
  title = 'mi-primer-crud';
  usuarios = null;

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
      result => this.usuarios = result
    );
  }

  altaUsuario(){
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          alert(datos['mensaje']);
          this.obtenerUsuarios();

        }
      }
    );
    bajaUsuario(idUsuario){
      this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
        datos=>{
          if(datos['resultado'] == 'OK') {
            alert(datos['mensaje']);
            this.obtenerUsuarios();
          }
        }
      );
    }
  }
}
