const Razorpay = require("razorpay");



exports.createOrder =

        async (req,resp) =>{ 


    
                try {


                    var razorpay =  new Razorpay({
                        key_id: 'rzp_test_3ZkshMAHdkZBQe',
                        key_secret: 'KgCnFBsKiJ8zYRzXFfGY51Ez',  
                    });
                    
                  
        
                  const  {amount, currency, reciept, notes} = req.body;
                  
        
               const   options = {
                    amount: Number(amount * 100),
                    currency: "INR",
                  };
        
                    const order = await razorpay.orders.create(options,(error,order)=>{

                        if(error){

                            
                            return resp.status(500).json({message: "something went Wrong",
                                 error: error})
                        }

                        resp.status(200).json({data: order});
                    } );

                
                    
                } catch (error) {
                    

                    console.log(error.message);
                }

        }


