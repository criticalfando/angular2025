import { Municipios } from './../../model/municipio';
import { ProvinciasService } from './../../services/provincias.service';
import { Provincias } from './../../model/provincias';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-provincias',
  imports: [CommonModule, FormsModule],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})
export class ProvinciasComponent {


  Provincias:Provincias[]
  Municipios:Municipios[]
  codigoProvincialSel:number

  constructor(private provinciasService:ProvinciasService){
    provinciasService.provincias().subscribe(data=>this.Provincias=data)
  }

  municipiosProv():void{
    this.provinciasService.municipiosProvincia(this.codigoProvincialSel).subscribe(
      data => this.Municipios = data
    )
  }

}
