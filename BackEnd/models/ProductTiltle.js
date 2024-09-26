const mongoose =require("mongoose")

const {Schema} = mongoose;



const ProductTitle = new Schema({
    
    ProductTitle : {
        type:[String],

    }
}
    

)


module.exports = mongoose.model("ProductTitle",ProductTitle)

