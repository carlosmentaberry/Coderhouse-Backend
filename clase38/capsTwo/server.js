const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routeProducts = require("./src/routes/productRoutes")

app.use(express.json());
app.use("/api", routeProducts);


app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});


module.exports = app;