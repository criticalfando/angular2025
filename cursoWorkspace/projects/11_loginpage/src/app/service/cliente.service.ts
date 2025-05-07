import { Usuarios } from './../model/usuarios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  arrayUsuarios:Usuarios[]=[]

validar(nombre:string,contraseña:string):boolean{
  return this.arrayUsuarios.some(c=>c.nombre==contraseña&&c.contraseña==contraseña);

}
registro(usuario:Usuarios):void{
    this.arrayUsuarios.push(usuario)
}


}
