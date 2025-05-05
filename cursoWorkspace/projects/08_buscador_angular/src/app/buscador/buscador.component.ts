import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Webs } from '../model/Webs';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})

export class BuscadorComponent {

datos=[
  new Webs("deportes","https://www.marca.es"),
  new Webs("libros","https://www.puntolibro.es"),
  new Webs("cocina","https://www.cocinahoy.es"),
  new Webs("cocina","https://www.cocinaayer.es"),
  new Webs("juegos","https://www.game.es"),
]

tematicaSeleccionada:string
resultados:Webs[]=[];

tematicas:Set<String>;
constructor(){
  this.tematicas = new Set(this.datos.map(p=>p.tematica));
}

obtenerResultados():void{
  // Si la tematica seleccionada es "todos" no aplicar el filtro
  this.resultados = this.datos.filter(r=>r.tematica==this.tematicaSeleccionada||"todos"==this.tematicaSeleccionada)
}



}
