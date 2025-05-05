import { Component } from '@angular/core';
import { CalculadoraService } from '../service/CalculadoraService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1:number
  num2:number
  resultado:string

  calService:CalculadoraService
  constructor(){
    this.calService=new CalculadoraService();
  }

  sumar():void{
    this.resultado=`La suma es ${this.calService.sumar(this.num1,this.num2)}`;
  }

  restar():void{
    this.resultado=`La resta es ${this.calService.restar(this.num1,this.num2)}`;
  }

  multiplicar():void{
    this.resultado=`La multiplicacion es ${this.calService.multiplicar(this.num1,this.num2)}`;
  }

  dividir():void{
    this.resultado=`La division es ${this.calService.dividir(this.num1,this.num2)}`;
  }

  factorial():void{
    this.resultado=`El factorial de ${this.num1} es ${this.calService.factorial(this.num1)}`;
  }

}
