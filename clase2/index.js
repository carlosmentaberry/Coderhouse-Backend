const mayor = (x, y) => {
    if(typeof(x) != NaN && typeof(y) != NaN){
        if(x > y){
            return x;
        }else {
            return y;
        }
    }
}

console.log("El mayor es: " + mayor(10,34));


const suma = (x, y) => {
    return x + y;
}
const resta = (x, y) => {
    return x - y;
}
const multiplicacion = (x, y) => {
    return x * y;
}
const division = (x, y) => {
    return x / y;
}


const operacion = (x, y, cb) => {
    return cb(x,y);
}

console.log("El resultado de la suma es: " + operacion(10,34, suma));
console.log("El resultado de la resta es: " + operacion(10,34, resta));
console.log("El resultado de la multiplicacion es: " + operacion(10,34, multiplicacion));
console.log("El resultado de la division es: " + operacion(10,34, division));