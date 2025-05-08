import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  agenda:Contacto[]=[];

  guardar(contacto:Contacto):boolean{
    // Llamamos a buscar par que nos de un contacto con ese email
    // Si no hay ninguno guardamos y devolvemos true
    // Pero si encuentra uno, no guardamos y devolvemos falso.
  let c=this.buscar(contacto.email)
  if(c){
    return false;
  }else{
    this.agenda.push(contacto);
    return true;
  }}

  eliminar(posicion:number) {
  this.agenda.splice(posicion, 1)
  }

  mostrar():Contacto[]{
   return this.agenda
  }

  buscar(email:string):Contacto{
    return this.agenda.find(n => n.email == email)

  }

  }
