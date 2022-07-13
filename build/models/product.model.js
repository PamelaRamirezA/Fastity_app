"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    description: { type: String },
    quantity: { type: Number },
}, {
    timestamps: true,
    versionKey: false, //quita el __v de los documentos que genera mongoose.
});
module.exports = (0, mongoose_1.model)('Product', exports.productSchema);
