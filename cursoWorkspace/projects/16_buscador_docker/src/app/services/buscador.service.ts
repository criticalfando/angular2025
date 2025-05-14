import { Injectable } from '@angular/core';
import { Libros } from '../model/libros';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BuscadorService {

  libros:Libros[]
  urlBase:string="http://localhost:8000/buscador/"

  constructor(private http:HttpClient) { }

  buscar(tematica:string):Observable<Libros[]>{
    const url_busqueda = `${this.urlBase}/buscar`
    return this.http.get<Libros[]>(url_busqueda,{params:{"tematica":tematica}})
  }

  alta(libro:Libros):Observable<Libros>{
    const url_alta = `${this.urlBase}/alta`;
    return this.http.post<Libros>(url_alta, libro);
  }

  eliminar(tematica:string):Observable<Libros[]>{
    const url_eliminar=`${this.urlBase}/eliminar?tematica=${tematica}`;
    return this.http.delete<Libros[]>(url_eliminar);
  }


}
