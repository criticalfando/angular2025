import { BuscadorService } from './../../services/buscador.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libros } from '../../model/libros';

@Component({
  selector: 'app-agregar',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  urlAlta:string;
  tematicaAlta:string;
  descripcionAlta:string;
  libroAlta:Libros;

   constructor(private buscadorService:BuscadorService){}

   alta():void{
    const libro = new Libros(this.urlAlta,this.tematicaAlta,this.descripcionAlta);
    this.buscadorService.alta(libro)
    .subscribe();
   }

}
