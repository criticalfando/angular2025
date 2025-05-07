import { Cliente } from '../../model/Cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario:string
  password:string
  email:string
  telefono:string

  constructor(private clienteService:ClienteService){

  }

  registrar():void{
    let cliente=new Cliente(this.usuario,this.password,this.email,this.telefono)
    this.clienteService.registro(cliente)
  }

}
