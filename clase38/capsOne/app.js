const express = require("express");
const routesUser = require("./src/routes/users")
const app = express();
const PORT = process.env.PORT || 8080;

app.use("/api", routesUser);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});


module.exports = app;