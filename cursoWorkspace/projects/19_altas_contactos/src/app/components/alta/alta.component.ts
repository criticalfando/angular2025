import { CommonModule } from '@angular/common';
import { Contacto } from '../../model/Contacto';
import { ContactosService } from './../../service/contactos.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string
  contacto:Contacto=new Contacto()

  constructor(private contactosService:ContactosService){}

  alta(){
    this.contactosService.alta(this.contacto).subscribe({
      next: data=>this.mensaje="Contacto agregado",
      error:  err=>this.mensaje="No se pudo dar de alta el contacto"
      }
    )
    console.log(this.mensaje)
  }

}
