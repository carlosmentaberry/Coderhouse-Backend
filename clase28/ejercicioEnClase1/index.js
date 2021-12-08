let processes = process.argv.slice(2);
let y = 0;
let max = 0;
processes.filter(x => {
    if(parseInt(max) < parseInt(x))
    {
        max = x;
    }
});
let min = max;

processes.filter(x => {
    if(parseInt(min) > parseInt(x))
        min = x;
});

let suma = 0;
processes.filter(x => {
    suma += parseInt(x);
});
let prom = parseInt(suma) / parseInt(processes.length);

let obj = {
    datos:{
        numeros: processes,
        promedio: prom,
        max: max,
        min: min,
        ejecutable: process.execPath.split('\\').pop(),
        pid: process.pid,
    }
}

console.log(obj);