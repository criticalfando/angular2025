import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../service/agenda.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [CommonModule, FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  email:string
  contactoEncontrado:Contacto;
  constructor( private agendaService:AgendaService){

  }

  buscar(){
    this.contactoEncontrado=this.agendaService.buscar(this.email)
  }

}
