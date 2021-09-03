// Ejercicios desafio entregable

console.log("***********************Ejercicios desafio entregable***********************");

// 1- 
class Usuario {
    // 2-
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    // 3-
    getFullName(){
        return this.apellido + ", " + this.nombre;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        return "mascota agregada " + mascota;
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombreLibro, autorLibro){
        this.libros.push( { nombre: nombreLibro, autor: autorLibro} );
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

let libros = [ { nombre: "The Lord of the rings", autor: "JRR Tolkien"}, { nombre: "The Hobbit", autor: "JRR Tolkien"} ];
let mascotas = ["Ona", "India"];

// 4-
let user = new Usuario("Carlos", "Mentaberry", libros, mascotas)

console.log("Nombre completo: " + user.getFullName());
console.log("Agrego mascota: " + user.addMascota("Bichito"));
console.log("Cantidad de mascotas: " + user.countMascotas());
console.log("Libros: " + user.getBookNames());
