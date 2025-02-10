import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tareas } from '../tareas';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tasks: Tareas[] = [];
  constructor(private tareasSer: TareasService) { }
  ngOnInit(): void {
    this.tareasSer.peticionTareas().subscribe((data: Tareas[]) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}

