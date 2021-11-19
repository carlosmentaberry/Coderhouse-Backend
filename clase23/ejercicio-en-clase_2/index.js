const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const app = express();
var fileStoreOptions = { 
    path:"./sessions",
    ttl:3000,
    retries:0
};

app.use(session({
    secret:"misecreto",
    store: new FileStore(fileStoreOptions),
    resave:true,
    saveUninitialized:true,
    // cookie:{
    //     maxAge:3000
    // }
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