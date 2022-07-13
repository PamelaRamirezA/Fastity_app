const Product = require ("../models/product.model");

const createProduct = async (request: any, reply: any) => {
    const newProduct = new Product(request.body);
    await newProduct.save();
    reply.code(201).send(newProduct);
};

const getProducts = async (request: any, reply: any)=> {
    const products = await Product.find({});
    return products;
};   

const getProduct = async (request: any, reply: any) => {
    const product = await Product.findById(request.params.id);
    //return product;
    reply.code(200).send(product);
};

const deleteProduct = async (request: any, reply: any) => {
    const product = await Product.findByIdAndDelete(request.params.id);
    //return product;
    reply.code(204).send();
};

const updateProduct = async (request: any, reply: any) => {
    const product = await Product.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}
        );
    reply.code(200).send(product);
};

module.exports = {
        createProduct,
        getProduct,
        getProducts,
        deleteProduct,
        updateProduct
};