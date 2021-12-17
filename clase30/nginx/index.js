const express = require("express");
const app = express();
const PORT = process.argv[2] || 8080;

app.get("/data", (req,res) =>{
    res.send(`Servidor express (nginx) running on PORT: ${PORT} <b> PID: ${process.pid} </b>`);
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});