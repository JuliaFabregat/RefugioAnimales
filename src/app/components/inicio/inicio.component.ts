import { Component } from '@angular/core';
import { AnimalesserviceService } from '../../animales.service';
import { Animales } from '../../models/Animales';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  // Variables
  // animales: any;
  animales: Animales[] = [];
  animalesFiltrados: Animales[] = []; // Variable para el filtro
  filtro: string = '';

  constructor(private animalesservice: AnimalesserviceService){
    this.mostrarTodos();
  }

  // Método para mostrar todos los animales
  mostrarTodos(){
    this.animalesservice.mostrarListaAnimales().subscribe((respuesta: Animales[]) => {
      // Para comprobar la respuesta
      console.log(respuesta);
      
      this.animales = respuesta;
      this.animalesFiltrados = respuesta;
    });
  }

  // Método para filtrar según el texto introducido
  filtrarAnimales() {
    const filtroLower = this.filtro.toLowerCase();

    this.animalesFiltrados = this.animales.filter(animal =>
      animal.nombre.toLowerCase().includes(filtroLower) ||
      animal.especie.toLowerCase().includes(filtroLower) ||
      animal.raza.toLowerCase().includes(filtroLower) ||
      animal.estado.toLowerCase().includes(filtroLower)
    );
  }
}
