import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1:number=0
  num2:number=0
  resultado:number=0

  sumar(){

    this.resultado=this.num1+this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<b>${this.resultado}</b>`

  }

  restar(){

    this.resultado=this.num1-this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<b>${this.resultado}</b>`

  }

  multiplicar(){

    this.resultado=this.num1*this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<b>${this.resultado}</b>`

  }

  dividir(){

    this.resultado=this.num1/this.num2;

    let divResultado:any=document.getElementById("divResultado");
    divResultado.innerHTML=`<b>${this.resultado}</b>`

  }
}
