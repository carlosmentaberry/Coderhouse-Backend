const express = require("express");

const app = express();
app.use("/static", express.static(__dirname + "/public"));
app.use("/static", express.static(__dirname + "/files"));


app.listen(3002, () =>{
    console.log("ok");
})
