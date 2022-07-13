"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));
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
async function connect() {
    const dbUri = config_1.default.get('dbUri');
    try {
        await mongoose_1.default.connect(dbUri);
        console.log("mongodb connected");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
    return mongoose_1.default.connect(dbUri);
}
exports.default = connect;
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
