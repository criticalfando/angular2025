import { CommonModule } from '@angular/common';
import { Contacto } from './../model/Contacto';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule,FormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string
  email:string
  telefono:string
  agenda:Contacto[]=[];
  visible:boolean=false

  guardar():void{
    let c=new Contacto();
    c.nombre=this.nombre
    c.email=this.email
    c.telefono=this.telefono

    this.agenda.push(c)
  }

  mostrar():void{
    this.visible=!this.visible;

  }

}
