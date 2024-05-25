import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 private readonly URL = "http://localhost/api/";

  constructor(private  http: HttpClient) { }

  obtenerUsuarios (): Observable<any> {
  return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }
    
    altaUsuario( usuario:any):Observable<any> {
      const headers = new HttpHeaders({'Content-Type':'aplication/json'});
      return this.http.post(`${this.URL}AltaUsuario.php` , JSON.stringify(usuario), {headers}) ;
    }

    bajaUsuario(idUsuario:number): Observable<any> {
      return this.http.get(`${this.URL}BajaUsuario.php?idUsuario=${idUsuario}`);
    }

    seleccionarUsuario(idUsuario:number): Observable<any> {
      return this.http.get(`${this.URL}SeleccionarUsuario.php?idUsuario=${idUsuario}`);
    }

    editarUsuario( usuario:any): Observable<any> {
      const headers = new HttpHeaders({'Content-Type':'aplication/json'});
      return this.http.post(`${this.URL}EditarUsuario.php` , JSON.stringify(usuario),{headers});

    }
  }

