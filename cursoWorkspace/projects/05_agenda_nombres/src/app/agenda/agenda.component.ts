import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  nombre:string;
  agenda=new Set();
  visible:boolean=false;

  guardar():void{
      this.agenda.add(this.nombre);
  }

  mostrar():void{
    this.visible=true;
  }

}
