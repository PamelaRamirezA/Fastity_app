const ProductCtrl = require("../controllers/product.controller");

export const routes = [
    {
        url : '/products',
        method: 'GET',
        handler: ProductCtrl.getProducts,
    },
    {
        url : '/products/:id',
        method: 'GET', 
        handler: ProductCtrl.getProduct,
    },
    {
        url : '/products',
        method: 'POST',
        handler: ProductCtrl.createProduct,
    },
    {
        url : '/products/:id',
        method: 'DELETE',
        handler: ProductCtrl.deleteProduct,
    },
    {
        url : '/products/:id',
        method: 'PUT',
        handler: ProductCtrl.updateProduct,
    }
];

module.exports = routes;