const { getProductsDB, saveProductDB, deleteProductDB, updateProductDB } = require("../db/productData")

const getProducts = async () => {
    return await getProductsDB();
}

const createProduct = async (data) => {
    data.added = Date.now();
    await saveProductDB(data);
    return data;
}

const updateProduct = async (data) => {
    await updateProductDB(data);
    return data;
}

const deleteProduct = async (data) => {
    await deleteProductDB(data);
    return data;
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}