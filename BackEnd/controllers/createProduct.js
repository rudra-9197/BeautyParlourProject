
const instr = require("../models/instrumentModel")

exports.createProduct =

    async (req,resp) =>{

        try {


            const {productTitle,product,price} = req.body;
        
            

        const instrument =  await instr.create({productTitle,product,price})
        
        resp.status(200).json({
            success:true
        })
        
        } catch (error) {
            
            console.log(error.message)
        }
        
        
        } 


exports.home  = (req, resp) =>{

resp.send("Hi home")

}