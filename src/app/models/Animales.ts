export class Animales{
    // Parámetros
    id: number;
    nombre: string;
    especie: string;
    raza: string;
    edad: string;
    estado: string;
    imagen: string;
    
    constructor(id: number, nombre: string, especie: string, raza: string, edad: string, estado: string, imagen:string){
        this.id=id;
        this.nombre=nombre;
        this.especie=especie;
        this.raza=raza;
        this.edad=edad;
        this.estado=estado;
        this.imagen=imagen;
    }
}