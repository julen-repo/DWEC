import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  users: Usuario[] = [];
  constructor(private usuario: UsuariosService){}
  ngOnInit(): void {
    this.usuario.peticionLocal().subscribe((data: Usuario[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
