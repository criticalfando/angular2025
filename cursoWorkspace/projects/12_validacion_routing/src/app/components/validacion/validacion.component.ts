import { Component } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  usuario:string
  password:string

  constructor(private clienteService:ClienteService){

  }

  validar(){
    let respuesta=this.clienteService.validar(this.usuario,this.password);
    if(respuesta){
      alert("Usuario válido.");
    }else{
      alert("Usuario no registrado.");
    }
  }

}
