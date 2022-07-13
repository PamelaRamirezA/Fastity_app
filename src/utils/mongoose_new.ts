import def from "ajv/dist/vocabularies/discriminator";
import config from 'config';
import mongoose from "mongoose";


//const mongoose2 = require('mongoose');
/*
export default (async () => {
    try{
        await mongoose.connect('mongodb://localhost/fastifycrud')
        console.log("mongodb connected")
    }catch(error){
        console.log(error);
        process.exit(1);
    }
})();

*/
async function connect(){
    const dbUri = config.get<string>('dbUri');

    try{
        await mongoose.connect(dbUri)
        console.log("mongodb connected")
    }catch(error){
        console.log(error);
        process.exit(1);
    }
    return mongoose.connect(dbUri);
}

export default connect;
/*
mongoose.connect('mongodb://localhost/fastifycrud')
    .then(() => {
        console.log("mongodb connected")
        })
    .catch((error: any) => { 
            console.log(error);
            process.exit(1);
    });
    */