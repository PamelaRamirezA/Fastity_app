import mongoose, { Schema, model } from "mongoose";
const connectionString = `mongodb+srv://psramirez:Mzej4vAiVSmwry57@cluster0.wwfwm.mongodb.net/fastify_test?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
    .then(()=> {
        console.log("mongodb connected");
    }).catch(err => {
        console.log(err);
    });
/*
const productSchema = new Schema({
    title: String,
    price: Number,
    image:String,
    description: String,
    quantity: Number,
});

const Product = model('Product', productSchema); 
//consulta todos los productos de la BD
Product.find({}).then(result =>{
    console.log(result);
    mongoose.connection.close();
}).catch(err => {
    console.log(err);
})
*/
/*
//crea nuevo producto
const product1 = new Product({
    title: 'product 3',
    price: 48,
    image: 'https://dsjsilsddkd',
    description: 'Product 3',
    quantity: 80,
});
//guarda el producto en la BD
product1.save()
    .then(result =>{
        console.log(result);
        mongoose.connection.close();
    }).catch( err => {
        console.log(err);
    });
    */