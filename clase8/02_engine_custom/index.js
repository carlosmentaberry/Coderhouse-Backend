const express = require("express");
const fs = require("fs");
const handlebars = require("express-handlebars");

const app = express();
app.engine("ntl", function(filePath, options, callBack){
    console.log(filePath);
    fs.readFile(filePath, (err, content) =>{
        if(err) return callBack("error al leer");

        let rendered = content.toString().replace("#nombre#", options.nombre).replace("#apellido#", options.apellido);
        console.log(rendered);
        return callBack(null, rendered);
    });
})

app.get("/", (req, res) =>{
    res.render("index", {nombre: "carlos", apellido: "mentaberry"});
});


app.set("views", "./views");
app.set("view engine", "ntl");

app.listen(8080, () =>{
console.log("app running on port 8080");
});