const express = require("express");
const cluster = require("cluster");
const nroCPUs = require("os").cpus();

const app = express();
let PORT = process.env.PORT || 8080;
let DATE = new Date().toLocaleString();

app.get("/", (req, res) => {
    let log = "";
    for (let i = 0; i < nroCPUs.length; i++) {
        log += `Servidor express en (${PORT}) - PID (${process.pid}) - (${DATE}) \n`;
    }
    res.send(log);
})

app.listen(PORT, () => {
    console.log(`server process id: ${process.pid} app running on http://localhost:${PORT}`);
});