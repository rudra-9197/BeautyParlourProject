const app = require("./app");
const connectToDb = require("./config/database");




connectToDb();



app.listen(4000,()=>{
    console.log("server is running with port "+ 4000)
});