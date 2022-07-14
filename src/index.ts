//import { route } from "./routes/products.routes";
import Fastify from 'fastify';
require('dotenv').config();
import { productSchema } from './models/product.model';
import config from 'config'
const productRoutes = require("./routes/products.routes.ts");
const Product = require('./models/product.model');
require('./utils/mongoose'); //al importar el archivo, este se ejecutará automáticamente.

const fastify = Fastify({
    logger: true
});

fastify.get("/", async (request,reply) =>{
    reply.send({hello: "world2"});
});

//usando el archivo de routes donde se encuentran definidos todos los requests.
productRoutes.forEach((route: any) => {
    fastify.route(route); 
});

//iniciando el servidor en el localhost 3000
fastify.listen({port: 3000}, (err,address)=>{
    if (err) throw err
    fastify.log.info(`server listening on 3000`);
    });
    
/*fastify.listen({port: port},async () =>{
    fastify.log.info(`server listening on 3000`);
    await connectPro();
});
*/