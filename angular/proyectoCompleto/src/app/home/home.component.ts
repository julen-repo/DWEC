import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionesService } from '../peticiones.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  users: Usuario[] = [];

  constructor(private peticion: PeticionesService) {
    console.log('Constructor ejecutado');
  }

  ngOnInit(): void {
    this.peticion.peticionCartas().subscribe((data: Usuario[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
