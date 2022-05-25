import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi: string = `${environment.urlAPI}/categoria`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Categoria[]>(this.urlApi);
  }

  getById(id: number) {
    return this.http.get<Categoria>(`${this.urlApi}/${id}`);
  }

  save(categoria: Categoria) {
    return this.http.post<Categoria>(this.urlApi, categoria);
  }

  update(categoria: Categoria) {
    return this.http.put<Categoria>(this.urlApi, categoria);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.urlApi}/${id}`);
  }

  toggleAtivo(id?: number) {
    return this.http.put<boolean>(`${this.urlApi}/toggleAtivo`, id);
  }

}
