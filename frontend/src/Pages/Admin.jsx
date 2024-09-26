import axios from "axios";




const Admin = () =>{

let prodctArray =[];
function  addProd() {

     

       let prodctName = document.querySelectorAll('.prodname');
       prodctName.forEach(product => {
        prodctArray.push(product.value);
      });
       

     

      updateProduct();


      prodctName.forEach(product => {
        product.value= "";
      });
       

}

const  updateProduct = async ()=>{

    const response = await axios.get("http://localhost:4000/getProductTitle");

    console.log(response);

    const { ProductTitle } = response.data[0];

    let ID =  response.data[0]._id;
    console.log(ID);
    const newArray = [...ProductTitle];

   
    await axios.post(`http://localhost:4000/updateProductTitle/${ID}` , { ProductTitle: prodctArray })
    .then(response => {
      console.log('Array updated successfully:', response.data);
    })
    .catch(error => {
      console.error('Error updating array:', error);
    });
  }




    return(

        <div>

            <div>admin age</div>

            <div className="flex flex-col">
                 <input type="text"  className="prodname border-2  w-16" />
                 <input type="text"  className="prodname border-2  w-16" />
                 <input type="text"  className="prodname border-2  w-16" />
                 <input type="text"  className="prodname border-2  w-16" />
 
            </div>

            <button onClick={addProd}>submit</button>




        </div>

           
     


    )


}

export default Admin;