import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/Contacto';
import { AgendaService } from '../service/agenda.service';

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

  constructor(private agenda:AgendaService){
    
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
