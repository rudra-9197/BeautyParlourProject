
const productTitle = require("../models/ProductTiltle");


exports.createProductTitle = async (req,resp) =>{
try{
    const ProductTtle = req.body;

    const newProductTitle = new productTitle(ProductTtle)

    await  newProductTitle.save();

    resp.status(200).json({
        success:true
    })
}
catch(error){
        console.log(error.message)
}

}


exports.updateProductTitle = async (req, resp )=>{

try {


    const  {id} = req.params;
    const {ProductTitle} = req.body;

    console.log(req.body);

    const result = await productTitle.findByIdAndUpdate(id, {$push:{ProductTitle:ProductTitle} }, {new: false, useFindAndModify: false})
  
    if(!result)
    {
        
        resp.status(400).json({

            result
        })
    }
else{


    resp.status(200).json({
        result,
        success:true
    })
}

    
} catch (error) {
    
    console.log(error.message)
}

}




