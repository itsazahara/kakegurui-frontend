import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private baseUrl = 'http://localhost:8080/kakegurui/api/personajes';

  constructor(private http: HttpClient) { }

  // Obtener todos los personajes
  getAll(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.baseUrl);
  }

  // Obtener personaje por id
  getById(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.baseUrl}/${id}`);
  }

  // Crear nuevo personaje
  create(personaje: Personaje): Observable<Personaje> {
    return this.http.post<Personaje>(this.baseUrl, personaje);
  }

  // Actualizar personaje
  update(id: number, personaje: Personaje): Observable<Personaje> {
    return this.http.put<Personaje>(`${this.baseUrl}/${id}`, personaje);
  }

  // Eliminar personaje
  delete(id: number): Observable<Personaje> {
    return this.http.delete<Personaje>(`${this.baseUrl}/${id}`);
  }

  // Buscar personajes por nombre
  searchByNombre(nombre: string): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.baseUrl}/buscador`, { params: { nombre } });
  }
}
