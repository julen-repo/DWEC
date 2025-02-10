import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient) { }

  private rutaLocal = 'usuarios.json';

  peticionLocal():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.rutaLocal);
  }
}
