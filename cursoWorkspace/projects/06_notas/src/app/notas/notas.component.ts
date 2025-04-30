import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  imports: [CommonModule, FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  notas:number[]=[]
  nota:number
  media:number
  alta:number
  baja:number
  aprobados:number

  guardar():void{
    this.notas.push(this.nota)
    this.datos();
  }

  datos():void{
    this.media=this.calcularMedia();
    this.alta=this.calcularAlta();
    this.baja=this.calcularBaja();
    this.aprobados=this.totalAprobados();

  }

  // Metodos para uso interno de los metodos de evento

  calcularMedia():number{
    let suma:number=this.notas.reduce((a,b)=>a+b);
    return (suma/this.notas.length);
  }

  calcularAlta():number{
    let max=this.notas[0]
    this.notas.forEach(n=>{
      if (n>max){
        max=n
      }
    })
    return max
  }

  calcularBaja():number{
    let min=this.notas[0]
    this.notas.forEach(n=>{
      if (n<min){
        min=n
      }
    })
    return min
  }

  totalAprobados():number{
  /*let total=0
    this.notas.forEach(n=>{
      if(n>5){
        total++
      }
    })
    return total */
    return this.notas.filter(n=>n>=5).length;
  }



}
