import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  constructor() { }

  peticionUsuario(usuario: String) {
    const url = 'https://reqres.in/api/login';
    const data = {
      email: usuario,
      password: "cualquiercosa"
    };

    fetch(url, {
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
        return data.token;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }
}
