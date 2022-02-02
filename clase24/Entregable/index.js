const express = require("express");
const path = require("path");
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const advancedOptions = {useNewUrlParser: true, useUnifiedTopology: true}
app.use(session({
  store: MongoStore.create({
      mongoUrl:"mongodb+srv://charly:Charly1234@cluster0.8xt8t.mongodb.net/ecommerce-nodejs?retryWrites=true&w=majority",
      mongoOptions: advancedOptions
  }),
  cookie: { maxAge: 10000 },
  secret:"secret",
  resave:false,
  saveUninitialized:false,
  rolling:true
}))


const chatRoute = require("./routes/chats");
app.use("/api/chat", chatRoute);

const productostestRoute = require("./routes/productosTest");
app.use("/api/productos-test", productostestRoute);

const login = require("./routes/login");
app.use("/api/login", login);

const logout = require("./routes/logout");
app.use("/api/logout", logout);


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