import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje = '';

  actualizar(t: number) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}