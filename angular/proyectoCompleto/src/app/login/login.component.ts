import { Component } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private peticion: PeticionesService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("Botón de login presionado");

    if (!this.email || !this.password) {
      console.log("Por favor, ingrese su email y contraseña");
      return;
    }

    this.peticion.peticionUsuario(this.email);
  }
}