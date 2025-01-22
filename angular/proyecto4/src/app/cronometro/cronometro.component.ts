import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent {
  segundo = 0;
  rojo = "red";
  azul = "blue";
  color = "";
  crono = document.getElementsByClassName('cronometro');
  @Input() inicio: number = 0;
  @Output() multiplo10 = new EventEmitter<number>();

  ngOnInit() {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 2 == 0) {
          const htmlElement = this.crono[0] as HTMLElement;
          htmlElement.style.backgroundColor = '#FF00FF';
      } else {
          const htmlElement = this.crono[0] as HTMLElement;
          htmlElement.style.backgroundColor = '#FFFF00';
      }
    }, 1000);
  }
}