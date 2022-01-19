const { getProducts, createProduct, deleteProduct, updateProduct } = require("../services/productServices");


const GetDatosController = async(req, res) =>{
    const data = await getProducts();
    res.json(data);
}

const CreateProductController = async(req, res) =>{
    const data = await createProduct(req.body);
    res.json(data);
}

const DeleteProductController = async(req, res) =>{
    const data = await deleteProduct(req.body);
    res.json(data);
}

const UpdateProductController = async(req, res) =>{
    const data = await updateProduct(req.body);
    res.json(data);
}
module.exports = {
    GetDatosController,
    CreateProductController,
    DeleteProductController,
    UpdateProductController
};