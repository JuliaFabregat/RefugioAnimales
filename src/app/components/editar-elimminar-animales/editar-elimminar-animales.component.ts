import { Component } from '@angular/core';
import { AnimalesserviceService } from '../../animales.service';
import { Animales } from '../../models/Animales';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-elimminar-animales',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-elimminar-animales.component.html',
  styleUrls: ['./editar-elimminar-animales.component.css']
})
export class EditarElimminarAnimalesComponent {
  // Variables
  animales: any;
  animalBorrado: any;
  allAnimales: any = []; // Lista para filtrar
  mostrarFormulario = false; // Bool para mostrar el formulario

  animal: Animales = {
    id: 0,
    nombre: '',
    raza: '',
    especie: '',
    edad: '',
    estado: '',
    imagen: '',
  };

  // FILTRO
  filtroEstado: string = '';

  constructor(private animalesservice: AnimalesserviceService) {
    this.mostrarTodos();
  }
  

  // Método para buscar un animal por estado
  filtrarPorEstado() {
    if (!this.filtroEstado || this.filtroEstado.trim() === '') {
      // Si no hay filtro, mostramos todos los animales
      this.animales = this.allAnimales;
    } else {
      const filtro = this.filtroEstado.toLowerCase();
      // Se filtra la lista comparando ambos valores en minúsculas
      this.animales = this.allAnimales.filter((animal: any) => animal.estado.toLowerCase() === filtro);
    }
  }


  // Método para mostrar todos los animales - SELECT
  mostrarTodos(){
    this.animalesservice.mostrarListaAnimales().subscribe((respuesta: Animales[]) => {
      // Para comprobar la respuesta
      console.log(respuesta);
      
      this.animales = respuesta;
      this.allAnimales = respuesta;
    });
  }


  // Método para eliminar un animal - DELETE
  animalAEliminar(animal: any){
    this.animalBorrado = animal;
    console.log(this.animalBorrado);
  }

  confirmarEliminacion(){
    if(this.animalBorrado){ // Si hay un animal para eliminar llamamos a la función baja
      this.baja(this.animalBorrado);
    }
  }

  baja(animal: Animales) {
    this.animalesservice.baja(animal).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.mostrarTodos();
      }
    });
  }


  // Método para seleccionar un animal - SELECT
  seleccionar(animal: Animales) {
    console.log('Animal seleccionado:', animal);

    // Mostrar formulario
    this.mostrarFormulario = true; 
  
    this.animalesservice.seleccionar(animal).subscribe((result: any) => {
        if (result && result[0]) {
          this.animal = result[0]; // Asignar solo si hay datos válidos
          console.log('Animal asignado:', this.animal);
        } else {
          console.error('No se recibieron datos válidos del servicio');
        }
      },
      (error) => {
        console.error('Error al seleccionar el animal:', error);
      }
    );
  }


  // Método para modificar un animal seleccionado - UPDATE
  modificarAnimal() {
    this.animalesservice.modificacion(this.animal).subscribe((datos: any) => {
      if (datos['resultado'] == 'OK') {

        console.log('Datos modificados:' + datos);

        alert(datos['mensaje']);

        // Ocultar formulario
        this.mostrarFormulario = false;
        
        this.mostrarTodos();
      }
    });
  }
}
