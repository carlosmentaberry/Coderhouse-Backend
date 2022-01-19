const dataProducts = [];

const getProductsDB = async() =>{
    return dataProducts;
}

const saveProductDB = async(data) =>{
    dataProducts.push(data);
    return dataProducts;
}

const updateProductDB = async(data) =>{
    dataProducts.filter(x => x.name === data.name)[0].price = data.price;
    return dataProducts;
}

const deleteProductDB = async(data) =>{
    let index = dataProducts.findIndex(x => x.name === data.name);
    console.log(index);
    if (index > -1) {
        dataProducts.splice(index, 1);
    }
    
    return dataProducts;
}

module.exports = {
    getProductsDB,
    saveProductDB,
    updateProductDB,
    deleteProductDB
}