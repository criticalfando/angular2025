import { Libros } from './../../model/libros';
import { FormsModule } from '@angular/forms';
import { BuscadorService } from './../../services/buscador.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})

export class BuscarComponent {
  libros:Libros[]=[];
  tematicaSeleccionada:string;

   constructor(private buscadorService:BuscadorService){}

    buscar():void{
      this.buscadorService.buscar(this.tematicaSeleccionada)
      .subscribe(resultado=>this.libros=resultado);
    }

}
