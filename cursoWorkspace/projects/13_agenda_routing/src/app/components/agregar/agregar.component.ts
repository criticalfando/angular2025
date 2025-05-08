import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AgendaService } from '../../service/agenda.service';

@Component({
  selector: 'app-agregar',
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})

export class AgregarComponent {

  constructor(private router:Router,private agendaService:AgendaService){

  }

  nombre:string
  email:string
  numero:string

  guardar():void{
    let contactoAgregado=new Contacto(this.nombre,this.email,this.numero)
    this.agendaService.guardar(contactoAgregado)
  }

}
