import { CommonModule } from '@angular/common';
import { Contacto } from '../../model/Contacto';
import { Component } from '@angular/core';
import { AgendaService } from '../../service/agenda.service';

@Component({
  selector: 'app-all',
  imports: [CommonModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

agenda: Contacto[]=[];

constructor (private agendaService:AgendaService){
  this.agenda=this.agendaService.mostrar();
}
}
