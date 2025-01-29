import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesService } from '../peticiones.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [RouterOutlet, LoginComponent, FormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private peticion: PeticionesService, private router: Router) { }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("Botón de login presionado");

    if (!this.email || !this.password) {
      console.log("Por favor, ingrese su email y contraseña");
      return;
    }


    console.log("Sale: "+this.peticion.peticionUsuario(this.email));
    
    console.log("ffdasfdas");
    this.router.navigate(['/home']);
  }
}
