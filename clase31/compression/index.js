const express = require("express");
const dotenv = require("dotenv").config();
const compression = require("compression");
const app = express();

app.use(compression());

const PORT = process.argv[2] || 8080;

app.get("/", (req,res) =>{
    if(process.env.NODE_ENV === "PROD"){
        res.send(`Server running on PORT: ${PORT} <b> PID: ${process.pid} </b>`.repeat(1000));
        return;
    }
    res.send(`Server running on PORT: ${PORT} <b> PID: ${process.pid} </b>`);
    
});


app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});