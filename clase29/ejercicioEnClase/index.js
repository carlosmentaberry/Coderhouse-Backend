const express = require("express");
const cluster = require("cluster");
const nroCPUs = require("os").cpus();

if (cluster.isMaster) {
    for (let i = 0; i < 8; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) =>{
        console.log(`process id: ${process.pid} died`);
    });
} else {
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.get("/", (req, res) => {
        const log = "";
        for(let i= 0; i <= 5e9; i++)
        {
            sum += i;
        }
        for (let i = 0; i < nroCPUs.length; i++) {
            log += `Servidor express en (${PORT}) - PID (${process.pid}) - (${DATE}) \n`;
        }
    })

    app.get("/hola", (req, res) => {
        res.send("Hola mundo: " + process.pid);
    })

    app.listen(PORT, () => {
        console.log(`server process id: ${process.pid} app running on http://localhost:${PORT}`);
    });
}

