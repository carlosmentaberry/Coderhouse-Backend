const express = require("express");
const app = express();

const PORT = process.argv.slice(2)[0];
const DATE = new Date().toLocaleString();

app.get("/", (req, res) => {
    console.log(`Servidor express en (${PORT}) - PID (${process.pid}) - (${DATE})`);
    res.send(`Servidor express en (${PORT}) - PID (${process.pid}) - (${DATE})` );
})

app.listen(PORT, () => {
    console.log(`server process id: ${process.pid} app running on http://localhost:${PORT}`);
});