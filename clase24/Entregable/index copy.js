const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chatRoute = require("./routes/chats");
app.use("/api/chat", chatRoute);

const productostestRoute = require("./routes/productosTest");
app.use("/api/productos-test", productostestRoute);


const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
    socket.emit("render", "");
    socket.on("NewChat", () => {
        io.sockets.emit("render", "");
    });
});

server.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});