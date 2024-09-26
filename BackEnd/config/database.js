const mongoose = require("mongoose")

const connecToDB = async ()=>{


    await mongoose.connect("mongodb+srv://Rudra:rudra@cluster0.new6tin.mongodb.net/").then((conn)=>{
            console.log("DB conected "+conn.connection.host)
    }).catch(
        (err)=>{
            console.log(err.message);

            process.exit(1);
        }
    )
}

module.exports= connecToDB;