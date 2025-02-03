import { Component } from '@angular/core';
import { PersonasService } from '../api/personas.service';
import { Persona } from '../persona';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EditarPersonaComponent } from '../editar-persona/editar-persona.component';


@Component({
    selector: 'app-personas',
    imports: [EditarPersonaComponent],
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css',
})
export class PersonasComponent {
    usuarios: Persona[] = [];
    page: string = '1';
    id: number = 0;
    constructor(private personas: PersonasService, private router: Router, private activatedRoute: ActivatedRoute,) {
        this.mostrarUsuarios();
        this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
            this.id = parseInt(parametros.get('id')!);    
        });
    }
    mostrarUsuarios() {
        this.personas.getUsuarios(this.page).subscribe({
            next: (resultado) => {
                this.usuarios = resultado.data as Persona[];
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    editar(id:number, event:Event) {
        this.id = id;
        let divEditar = document.getElementById("editarDiv") as HTMLElement;
        divEditar.style.display = "block";
        event.stopPropagation();
    }

    moreInfo(id:number) {
        this.router.navigate(["home/moreInfo/"+id]);
    }

    modal(event:Event) {
        let divEditar = document.getElementById("editarDiv") as HTMLElement;
        divEditar.style.display = "none";
        event.stopPropagation();
    }

}
