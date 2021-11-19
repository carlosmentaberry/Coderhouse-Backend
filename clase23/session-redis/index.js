const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient();

const app = express();
var redisStoreOptions = { 
    host:"localhost",
    port:6379,
    client:redisClient
};

app.use(session({
    secret:"misecreto",
    store: new RedisStore(redisStoreOptions),
    resave:true,
    saveUninitialized:true,
}))

redisClient.on("ready", () => {
    console.log("Connected to redis");
})

app.get("/", (req,res)=>{
    req.session.user = "charly";
    req.session.password = "123456";
    res.send("Session guardada");
})

app.get("/logout", (req,res)=>{
    req.session.destroy((err) =>{
        if(err){
            console.log("Error al desloguearse");
        }
        res.redirect("/count")
    })
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