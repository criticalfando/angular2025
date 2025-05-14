import { Municipios } from './../model/municipio';
import { Provincias } from './../model/provincias'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  urlProvincias:string="https://www.el-tiempo.net/api/json/v2/provincias"

  constructor(private http:HttpClient) { }

  provincias():Observable<Provincias[]>{
    return this.http.get<any>(this.urlProvincias)
    .pipe(map(obj=>obj.provincias))
  }

  municipiosProvincia(cod:number):Observable<Municipios[]>{
    const url: string = `${this.urlProvincias}/${cod}/municipios`
    return this.http.get<Municipios[]>(url)
  }
}
