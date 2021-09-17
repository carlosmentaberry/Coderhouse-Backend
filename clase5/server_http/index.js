const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {
        let hora = parseInt(moment().format("HH"));
        console.log(hora);
        if(hora >= 06 && hora <= 12){
            res.end("Buen dia");    
        }
        if(hora >= 13 && hora <= 19){
            res.end("Buenas tardes");    
        }
        if(hora >= 20 || hora <= 05){
            res.end("Buenas noches");    
        }
    
});

const portListen = server.listen(5000, () =>{
    console.log("server running on port 5000");
});