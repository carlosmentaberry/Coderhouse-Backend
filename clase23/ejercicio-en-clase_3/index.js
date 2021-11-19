const express = require("express");
const session = require("express-session");

const mongo = require("mongoose");
const MongoStore = require("connect-mongo");

const app = express();
var mongoStoreOptions = { 
    mongoUrl:"mongodb+srv://charly:Charly12@cluster0.8xt8t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};

app.use(session({
    secret:"misecreto",
    store: MongoStore.create(mongoStoreOptions),
    resave:true,
    saveUninitialized:true,
}))

app.get("/", (req,res)=>{
    req.session.user = "charly";
    req.session.password = "123456";
    res.send("Session guardada");
})

app.get("/count", (req,res)=>{
    if(req.session.contador){
        req.session.contador++;
        res.send(`Hola ${req.query.nombre}, visitaste la pagina ${req.session.contador} veces`);
    }else{
        req.session.contador = 1;
        res.send(`Bienvenido ${req.query.nombre}`);
    }
})


app.listen(8080, () => {
    console.log("app running on port 8080");
});