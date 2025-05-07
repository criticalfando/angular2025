import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  arrayClientes:Cliente[]=[]

validar(nombre:string,password:string):boolean{
  return this.arrayClientes.some(c=>c.usuario==password&&c.password==password);

}
registro(cliente:Cliente):void{
    this.arrayClientes.push(cliente)
}


}
