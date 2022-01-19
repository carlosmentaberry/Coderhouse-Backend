const { Router } = require("express");
const { GetDatosController, CreateProductController, DeleteProductController, UpdateProductController } = require("../controllers/productControllers")

const router = new Router();

router.get("/", GetDatosController);

router.post("/", CreateProductController);

router.put("/", UpdateProductController);

router.delete("/", DeleteProductController);

module.exports = router;