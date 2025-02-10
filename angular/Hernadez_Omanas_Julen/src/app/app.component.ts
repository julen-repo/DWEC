import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [BarrademenuComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones = [
    "Usuarios", "Tareas"
  ];
  constructor(private router: Router) {}

  presion(op: number) {
    switch(op){
      case 1:
        this.router.navigate(['/usuarios']);
        break;
      case 2:
        this.router.navigate(['/tareas']);
    }
  }
  usuarios(){
    this.router.navigate(['/usuarios']);
  }
}