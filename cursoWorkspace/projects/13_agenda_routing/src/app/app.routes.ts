import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AllComponent } from './components/all/all.component';

export const routes: Routes = [
  {
    path:"main",
    component:MainComponent
  },
  {
    path:"agregar",
    component:AgregarComponent
  },
  {
    path:"busqueda",
    component:BusquedaComponent
  },
  {
    path:"all",
    component:AllComponent
  }
];
