"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { route } from "./routes/products.routes";
const fastify_1 = __importDefault(require("fastify"));
const Product = require('./models/product.model');
const mongoose_1 = __importDefault(require("./utils/mongoose"));
const config_1 = __importDefault(require("config"));
const port = config_1.default.get('port');
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get("/", async (request, reply) => {
    reply.send({ hello: "world" });
});
//iniciando el servidor en el localhost 3000
/*
fastify.listen({port: 3000}, (err,address)=>{
    if (err) throw err
    fastify.log.info(`server listening on 3000`);
    });
    */
//require('./utils/mongoose');
/*
(async () =>{
    console.log('conectando');
    await connectPro();
})();
*/
/*
    fastify.listen({port: 3000}, (err,address)=>{
        if (err) throw err
        fastify.log.info(`server listening on 3000`);
        });
        */
/*
 const start =async () => {
     await fastify.listen({port: port});
     fastify.log.info(`server listening on 3000`);
     await connectPro();
 }

 start();
 */
fastify.listen({ port: port }, async () => {
    fastify.log.info(`server listening on 3000`);
    await (0, mongoose_1.default)();
});
//ROUTES
fastify.route({
    url: '/products',
    method: 'GET',
    handler: async (request, reply) => {
        const products = await Product.find();
        //reply.send('products123');
        return products;
    }
});
fastify.route({
    url: '/products/:id',
    method: 'GET',
    handler: function (request, reply) {
        console.log(request.body);
        reply.send('single products');
    }
});
fastify.route({
    url: '/products/:{product}',
    method: 'POST',
    handler: function (request, reply) {
        console.log(request.body);
        reply.send('creating a product');
    }
});
fastify.route({
    url: '/products/:id',
    method: 'DELETE',
    handler: function (request, reply) {
        console.log(request.body);
        reply.send('deleting a product');
    }
});
fastify.route({
    url: '/products/:id',
    method: 'PUT',
    handler: function (request, reply) {
        console.log(request.body);
        reply.send('updating a product');
    }
});
