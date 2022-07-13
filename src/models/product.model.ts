import {Schema, model} from 'mongoose';

export const productSchema = new Schema({
    title:{type: String},
    price:{type: Number},
    image:{type: String},
    description:{type: String},
    quantity:{type: Number},
}, {
    timestamps: true, // para guardar datos de tiempo de creacion, modificacion.
    versionKey: false, //quita el __v de los documentos que genera mongoose.
});
const Product = model('Product', productSchema);
module.exports = Product;


