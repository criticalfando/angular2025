import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Usuarios } from '../model/usuarios';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nombre:string
  contraseña:string
  email:string
  telefono:string
  registroVisible:boolean=false

  //Inyeccion del servicio
  constructor(private clientesService:ClienteService){

  }

  validar():void{
    const validacion:boolean=this.clientesService.validar(this.nombre,this.contraseña)
    if(validacion==true){
      alert("Login correcto.")
    }else{
      alert("Usuario no registrado")
    }
  }

  registro():void{
    const nuevoUsuario= new Usuarios(this.nombre,this.contraseña,this.email,this.telefono)
    this.clientesService.registro(nuevoUsuario)
    alert("Usuario registrado.")
    this.nombre='';
    this.contraseña='';
    this.email='';
    this.telefono='';
    this.registroVisible=false;
  }
}



