// let params = process.argv.slice(2);

// let result = 0;
// switch (params[0]) {
//     case "suma":
//         result = parseInt(params[1]) + parseInt(params[2]);
//         break;
//     case "resta":
//         result = parseInt(params[1]) - parseInt(params[2]);
//         break;
//     case "multiplicacion":
//         result = parseInt(params[1]) * parseInt(params[2]);
//         break;
//     case "division":
//         result = parseInt(params[1]) / parseInt(params[2]);
//         break;
// }

// console.log(`operacion: ${params[0]} de ${params[1]} y ${params[2]} es: ${result}`);

// const productos = [
//     { id:1, nombre:'Escuadra', precio:323.45 },
//     { id:2, nombre:'Calculadora', precio:234.56 },
//     { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//     { id:4, nombre:'Paleta Pintura', precio:456.78 },
//     { id:5, nombre:'Reloj', precio:67.89 },
//     { id:6, nombre:'Agenda', precio:78.90 }
// ]

// const results = {
//     cadena: "",
//     total: 0,
//     promedio: 0,
//     menor: 0,
//     mayor: 0,
// }

// //A
// let cadena = productos.map(x => x.nombre).join(',');
// console.log(cadena);
// results.cadena = cadena;
// //B
// let total = 0;
// productos.map(x => total += x.precio)
// results.total = total;

// //C
// let promedio = total / productos.length;
// results.promedio = promedio;

// //D
// let menor = productos[0].precio;
// productos.forEach(prod => {
//     if(prod.precio < menor)
//     {
//         menor = prod.precio;
//     }
// });
// results.menor = menor;

// //E
// let mayor = productos[0].precio;
// productos.forEach(prod => {
//     if(prod.precio > mayor)
//     {
//         mayor = prod.precio;
//     }
// });
// results.mayor = mayor;

// //F
// console.log(results);


// const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(Number.parseFloat(os.totalmem()/1024/1024/1024).toFixed(2) + " GB");


const color = require("colors");
const moment = require("moment");

console.log(moment)