import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { TablanroComponent } from './tablanro/tablanro.component';
import { Component404Component } from './component404/component404.component';

export const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: "tabla/:nro",
    component: TablanroComponent
  },
  {
    path: "component404",
    component: Component404Component
  },
  {
    path: '**',
    redirectTo: 'pagina404'
  }
];