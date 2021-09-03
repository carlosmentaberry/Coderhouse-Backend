let libros = [ { nombre: "The Lord of the rings", autor: "JRR Tolkien"}, { nombre: "The Hobbit", autor: "JRR Tolkien"} ];
let mascotas = ["Ona", "India"];

function Usuario (nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
};

let usuario = new Usuario("Carlos", "Mentaberry", libros, mascotas);

Usuario.prototype.getFullName = function () {
    return this.apellido + ", " + this.nombre;
};

Usuario.prototype.addMascota = function (mascota) {
    return "mascota agregada " + mascota;
};

Usuario.prototype.countMascotas = function () {
    return this.mascotas.length;
};

Usuario.prototype.addBook = function (nombreLibro, autorLibro) {
    this.libros.push( { nombre: nombreLibro, autor: autorLibro} );
};

Usuario.prototype.getBookNames = function () {
    return this.libros.map(libro => libro.nombre);
};

console.log(usuario.getFullName());
console.log("Agrego mascota: " + usuario.addMascota("Bichito"));
console.log("Cantidad de mascotas: " + usuario.countMascotas());
console.log("Libros: " + usuario.getBookNames());