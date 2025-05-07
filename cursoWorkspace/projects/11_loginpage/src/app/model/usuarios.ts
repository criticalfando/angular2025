export class Usuarios{
  nombre:string
  contraseña:string
  email:string
  telefono:string;


  constructor(nombre:string,contraseña:string,email:string,telefono:string){
    this.nombre=nombre;
    this.contraseña=contraseña;
    this.email=email;
    this.telefono=telefono;
  }
}
