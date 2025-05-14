import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';
import { Pais } from '../../model/pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paises',
  imports: [CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paises:Pais[]
  paisesFiltrados: Pais[] =[]
  constructor(private paisesService:PaisesService){

  }

  // Metodo de respuesta al evento click del boton "Ver paises"
  verPaises():void{
    this.paisesService.obtenerPaises() // Observable <Pais[]>
    .subscribe(data=>this.paises=data) // Se le dice que hacer con los datos que obtiene. (Guardarlo en la variable paises)
  }

}
