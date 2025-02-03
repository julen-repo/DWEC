import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from '../persona';
import { EditarService } from '../api/editar.service';

@Component({
    selector: 'app-editar-persona',
    imports: [],
    templateUrl: './editar-persona.component.html',
    styleUrl: './editar-persona.component.css',
})
export class EditarPersonaComponent implements OnChanges {
    @Input() valor: number = 0;
    id: number = 0;

    datosUsuario: Persona = {
        id: this.id,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
    };

    constructor(private datos: EditarService) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes['valor']) {
            this.id = this.valor;
            this.datos.getDatosUsuario(this.id).subscribe({
                next: (resultado) => {
                    this.datosUsuario = resultado.data as Persona;
                    let divEditar = document.getElementById(
                        'editarDiv'
                    ) as HTMLElement;
                    divEditar.style.display = 'block';
                },
                error: (error) => {
                    console.log(error);
                },
            });
        }
    }

    modal(event: Event) {
        let divEditar = document.getElementById('editarDiv') as HTMLElement;
        divEditar.style.display = 'none';
        event.stopPropagation();
    }
}
