import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animales } from './models/Animales';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalesserviceService {
  // URL del servidor
  url = 'http://localhost/DWEC_Angular/adopcionesdb/';

  constructor(private http: HttpClient) { }

  // Lista de animales - GET
  mostrarListaAnimales() {
    return this.http.get<any[]>(`${this.url}recuperarTodos.php`).pipe(
      map((data: any[]) => data.map(item => new Animales(
        parseInt(item.id),
        item.nombre,
        item.especie,
        item.raza,
        item.edad,
        item.estado,
        item.imagen
      )))
    );
  }

  // Añadir Animales - INSERT
  añadirAnimales(animal: Animales){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(animal));
  }

  // Eliminar Animales - DELETE
  baja(animal: Animales) {
    return this.http.delete(`${this.url}baja.php?id=${animal.id}`); // Usar DELETE
  }

  // // Seleccionar Animales - SELECT
  seleccionar(animal: Animales) {
    // Realiza una solicitud HTTP GET al endpoint 'seleccionar.php' con el código del artículo como parámetro
    return this.http.get(`${this.url}seleccionar.php?id=` + animal.id);
  }

  // Modificar Animales - UPDATE
  modificacion(animal: Animales) {
    // Realiza una solicitud HTTP POST al endpoint 'modificacion.php' enviando el artículo en formato JSON
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(animal));
  }
}