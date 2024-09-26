const mongoose = require("mongoose");

const {Schema} = mongoose;

const Prodchema = new Schema({

    productTitle:{

        type: String,
        require: [true,"Product Title is required"],
    },

    product: {
        type: String,
        require:[true,"Product Name is requied"],
        unique: true

    },

    price:{
        type:String,
        require:[true,"Product Price is requied"]
    }

})

module.exports =  mongoose.model("product",Prodchema)