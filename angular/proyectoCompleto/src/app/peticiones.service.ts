import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/users';

  constructor(private router: Router, private http: HttpClient) { }

  peticionUsuario(usuario: String) {
    const url = 'https://reqres.in/api/login';
    const data = {
      email: usuario,
      password: "cualquiercosa"
    };

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la autenticación');
        }
        return response.json();
      })
      .then(data => {
        console.log('Token recibido:', data.token);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);
        return data.token;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
  peticionCartas():Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }


  private rutaLocal = '/loquesea.json';//lee en la carpeta public

  peticionLocal():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.rutaLocal);
  }
}
