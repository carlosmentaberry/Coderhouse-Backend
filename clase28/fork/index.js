

const express = require("express");
const calculo = require("./calculo");
const app = express();
const PORT = process.env.PORT || 8080;
const {fork} = require("child_process");

app.get("/calculo", (req,res) =>{
    let calcu = fork("./calculo.js");
    calcu.send("START");

    calcu.on("message", (sum) => {
        res.send("suma: " + sum);
    });
});

let visitas = 0;
app.get("/", (req,res) =>{
    visitas ++;
    res.send("visitas: " + visitas);
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});