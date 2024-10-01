

const instr = require("../models/instrumentModel")

exports.createProduct =

    async (req,resp) =>{

        try {


            const {productTitle,instrument,price,instrumentDesc} = req.body;
             

        const instrmnt =  await instr.create({productTitle,price,instrumentDesc,instrument})
        
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


exports.UpdateInstrument = async (req, resp) =>{

        const{id}   = req.params;
        const{instrument,price,instrumentDesc}   = req.body;

        try {
             const updtdInstrmnt = await instr.findByIdAndUpdate(id,{$set:{instrument:instrument,price:price,instrumentDesc:instrumentDesc}},{new:true,});

            resp.status(200).json(
                {success: true,
                updtdInstrmnt
            }
        );

        } catch (error) {
            
            console.log(error.message);

        }
       
}