import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  arrayClientes:Cliente[]=[]

validar(usuario:string,password:string):boolean{
  return this.arrayClientes.some(c=>c.usuario==usuario&&c.password==password);

}
registrar(cliente:Cliente):void{
    this.arrayClientes.push(cliente)
}


}
