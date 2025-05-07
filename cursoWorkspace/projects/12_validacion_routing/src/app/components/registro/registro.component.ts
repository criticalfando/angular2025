import { Cliente } from '../../model/Cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private clienteService:ClienteService, private router:Router){

  }

  registrar():void{
    let cliente=new Cliente(this.usuario,this.password,this.email,this.telefono)
    this.clienteService.registrar(cliente)
    this.router.navigate(["/validar"])
  }

}
