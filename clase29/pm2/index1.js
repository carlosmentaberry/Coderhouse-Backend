const express = require("express");
const cluster = require("cluster");
const nroCPUs = require("os").cpus();

const app = express();
let PORT = process.env.PORT || 8080;
let DATE = new Date().toLocaleString();

app.get("/", (req, res) => {
    res.send(`Servidor 1 express en (${PORT}) - PID (${process.pid}) - (${DATE})`);
})

app.listen(PORT, () => {
    console.log(`server process id: ${process.pid} app running on http://localhost:${PORT}`);
});