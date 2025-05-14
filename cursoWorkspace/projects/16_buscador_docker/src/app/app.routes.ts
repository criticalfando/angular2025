import { Routes } from '@angular/router';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MainComponent } from './components/main/main.component';

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
    path:"buscar",
    component:BuscarComponent
  },
  {
    path:"eliminar",
    component:EliminarComponent
  }
];
