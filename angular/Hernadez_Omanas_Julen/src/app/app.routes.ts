import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TareasComponent } from './tareas/tareas.component';

export const routes: Routes = [
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'tareas',
        component: TareasComponent
    },
    { 
        path: '**', 
        redirectTo: 'usuarios' 
    },
    { 
        path: '', 
        redirectTo: 'usuarios', 
        pathMatch: 'full' 
    }
];
