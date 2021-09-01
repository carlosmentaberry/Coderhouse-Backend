// primer ejercicio

var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
    console.log("numero1 no es mayor que numero2");
}
if (numero1 < 0 || numero1 != 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// desafio en clase

let valores = [true, 5, false, "hola", "adios", 2];

// 1- Realizar una función que reciba como parámetro el array y devuelva el elemento de texto con más caractes
const maxLenghtWord = () => {
    let longWord = '';
    let valoresFiltrados = valores.filter(val => typeof(val) == 'string');
    
    for (i = 0; i<= valoresFiltrados.length -1; i++) {
        if(i == 0){
            longWord = valoresFiltrados[i];
        }else{
            if(valoresFiltrados[i].toString().length > longWord.length){
                longWord = valoresFiltrados[i];
            }
        }
    }
    return longWord;
}

console.log("La palabra más larga del array es: " + maxLenghtWord());


// 2- Similar al punto anterior, que devuelva en que posición del array se encuentra un 'false'
const falsePosition = (value) => {
    for (i = 0; i<= valores.length -1; i++) {
        if(typeof(valores[i]) == "boolean"){
            if(valores[i] === value){
                return i;
            }
        }
    }
}

console.log("Valor false se encuentra en la posisicón " + falsePosition(false) + " del array.");

// 3- Crear otra función que devuelva el resultado de la operación entre los dos elementos numéricos que contiene el array.<br>Dicha función recibirá dos parámetros: el array y la operación ('suma', 'resta', 'mult', 'div') a realizar

const calculator = (operation) => {
    let result = 0;
    let firstNum, lastNum;
    let isFirst = false;

    for (i = 0; i<= valores.length -1; i++) {
        if(typeof(valores[i]) == "number"){
            if(!isFirst){
                firstNum = valores[i];
            }else{
                lastNum = valores[i];
            }
            isFirst = true;
        }
    }

    switch (operation.toLowerCase()) {
        case "suma":
            result = firstNum + lastNum;
            break;
        case "resta":
            result = firstNum - lastNum;
            break;
        case "mult":
            result = firstNum * lastNum;
            break;
        case "div":
            result = firstNum / lastNum;
            break;
    }
    return result;
}

let operacion = 'suma';
console.log(`resultado de la operación ${operacion}` + calculator(operacion));