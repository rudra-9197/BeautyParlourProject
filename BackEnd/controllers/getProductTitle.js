const productTitle = require("../models/ProductTiltle");

 exports.getProductTitle = async (req, resp)=>{
try {

    const data =await  productTitle.find();

    if(data){

            resp.status(200).json(
                data
            )
    }
    else{

        resp.status(400).json({
            success: failure,
            Msg: "Data not Found"
        })
    }

}
    
 catch (error) {
    console.log(error.msg)
}

 }