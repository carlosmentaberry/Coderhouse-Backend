const express = require("express");

const app = express();

app.get("/", (req,res) => {
res.status(201).send("hola mundo");
// res.status(201).send().json({msg: "hola mundo"});
});

app.listen(8080, () =>{
console.log("app running on port 8080");
})