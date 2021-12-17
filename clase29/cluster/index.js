const express = require("express");
const cluster = require("cluster");
const { FORMERR } = require("dns");
const nroCPUs = require("os").cpus();

const PORT = process.argv.slice(2)[0];
const DATE = new Date().toLocaleString();

if (cluster.isMaster) {
    for (let i = 0; i < 8; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
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
        res.send(`${log}`);
    })


    app.listen(PORT, () => {
        console.log(`server process id: ${process.pid} app running on http://localhost:${PORT}`);
    });
}

