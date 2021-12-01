const { type } = require("os");

console.log("hola " + process.argv[2]);

let processes = process.argv.slice(2);

console.table(processes);


let suma = 0;
processes.map(x => {
    if(!isNaN(x)){
        suma += parseInt(x);
    }
});

let sum = processes.reduce((acc, pre) =>{
    return parseInt(acc) + parseInt(pre);
});

console.log(suma);
console.log(sum);