const express = require("express");
require("dotenv").config();
const app = express();

const log4js = require("log4js");

log4js.configure({
    appenders:{
        myLoggerConsole:{type:"console"},
        myLoggerFile:{type:"file", filename:"info.log"},
    },
    categories:{
        default:{appenders:["myLoggerConsole"], level:"trace"},
        consola:{appenders:["myLoggerConsole"], level:"debug"},
        archivo:{appenders:["myLoggerFile"], level:"warn"},
    }
});

/*
    El logueo se realizará siguiendo el siguiente criterio:
    En caso de operaciones exitosas, loguear una línea de info
    En caso de ingresar un número no válido, loguear un error
    
    La decisión de qué logger exportar se tomará en base al valor de una variable de entorno NODE_ENV, cuyo valor puede ser: ‘PROD’ para producción, o cualquier otra cosa (incluyendo nada) para desarrollo.
*/    

const PORT = process.argv[2] || 8080;

app.get("/sumar", (req,res) =>{
    let suma = 0;
    if(isNaN(req.query.n1) || isNaN(req.query.n2)){
        const myLoggerFile = log4js.getLogger("archivo");

        myLoggerFile.error("Valor no numerico");
        res.send("myLoggerFile Valor no numerico");
        return;
    }else{
        suma = parseInt(req.query.n1) +  parseInt(req.query.n2)
        if(process.env.NODE_ENV === "PROD"){
            const myLoggerFile = log4js.getLogger("archivo");
    
            myLoggerFile.warn("myLoggerFile suma: " + suma);
            res.send("myLoggerFile suma: " + suma);
            return;
        }else{
            const myLoggerConsole = log4js.getLogger("consola");
    
            myLoggerConsole.info("myLoggerConsole suma: " + suma);
            res.send("myLoggerConsole suma: " + suma);
            return;
        }
    }
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});