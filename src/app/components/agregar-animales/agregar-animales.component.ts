import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animales } from '../../models/Animales';
import { AnimalesserviceService } from '../../animales.service';

@Component({
  selector: 'app-agregar-animales',
  imports: [FormsModule],
  templateUrl: './agregar-animales.component.html',
  styleUrl: './agregar-animales.component.css'
})
export class AgregarAnimalesComponent {
  animal: Animales = {id: 0, nombre: '', especie: '', raza: '',  edad: '', estado: '', imagen: ''};

  constructor(private animalesservice: AnimalesserviceService){}

  // Variables
  mostrarAlerta: boolean = false;
  valido: boolean = true;

  agregarAnimal(){
    // Primero validamos el formulario
    this.validarFormulario();

    if(this.valido){
      console.log(this.animal); // Para ver los datos

      this.animalesservice.añadirAnimales(this.animal).subscribe((datos:any) => {
        if (datos['resultado'] == 'OK'){
          this.mostrarAlerta = true;

          setTimeout(() => {
            this.mostrarAlerta = false;
          }, 5000);
        }
      });
    }
  }

  insertarImagen(event: any){
    const file = event?.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = () => {
        this.animal.imagen = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  validarFormulario(){
    this.valido = true;

    let nombreInput = document.getElementById("name") as HTMLInputElement;
    let especieInput = document.getElementById("specie") as HTMLInputElement;
    let razaInput = document.getElementById("race") as HTMLInputElement;
    let edadInput = document.getElementById("age") as HTMLInputElement;
    let estadoInput = document.getElementById("status") as HTMLInputElement;

    if(!this.animal.nombre && !this.animal.especie && !this.animal.raza && !this.animal.edad && !this.animal.estado){
      nombreInput.classList.add("is-invalid");
      especieInput.classList.add("is-invalid");
      razaInput.classList.add("is-invalid");
      edadInput.classList.add("is-invalid");
      estadoInput.classList.add("is-invalid");

      this.valido = false;
    } else{
      nombreInput.classList.remove("is-invalid");
      especieInput.classList.remove("is-invalid");
      razaInput.classList.remove("is-invalid");
      edadInput.classList.remove("is-invalid");
      estadoInput.classList.remove("is-invalid");
    }
  }
}
