import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { AgendaService } from '../service/AgendaService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  nombre:string;
  numero:string;

  contactos:Contacto[];
  agenda:AgendaService;

  constructor(){
    this.agenda=new AgendaService();
  }

  guardar(){
    let contacto=new Contacto(this.nombre,this.numero);
    this.agenda.guardar(contacto);
  }

  eliminar(indice: number){
    this.agenda.eliminar(indice);
  }

  mostrar(){
    this.contactos=this.agenda.recuperar();
  }

}
