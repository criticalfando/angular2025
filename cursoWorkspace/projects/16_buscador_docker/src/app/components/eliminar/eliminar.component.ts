import { Component } from '@angular/core';
import { BuscadorService } from '../../services/buscador.service';
import { Libros } from '../../model/libros';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  imports: [CommonModule, FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  tematicaSeleccionada:string;
  libros:Libros[]=[];

  constructor(private buscadorService:BuscadorService){}

    eliminar():void{
    this.buscadorService.eliminar(this.tematicaSeleccionada)
    .subscribe(resultado=>this.libros=resultado);
  }

}
