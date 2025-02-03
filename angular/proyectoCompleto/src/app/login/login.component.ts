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

  async espera(email: String){
    console.log("aaa"+await this.peticion.peticionUsuario(email));
    if(localStorage.getItem("token")){
      console.log("esto va");
      this.router.navigate(['/home']);
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("Botón de login presionado");

    if (!this.email || !this.password) {
      console.log("Por favor, ingrese su email y contraseña");
      return;
    }

    this.espera(this.email);

  }
}
