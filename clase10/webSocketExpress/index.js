
const exp = require("constants");
const express = require("express");

const app = express();

const server = require('http').Server(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

let mess = [{
    id: 1,
    msn: "Hola"
}];

io.on("connection", (socket) => {
    console.log("Server on");
    socket.emit("message", mess);
    socket.on("messageClient", (mess) => {
        console.log(mess);
    });
    socket.on("mess_send", (data) => {
        mess.push(data);
        socket.emit("message", mess)
    })
});

server.listen(8080, () => {
    console.log("app running on port 8080");
});