import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import All_Services from "../Components/All_Services";
import Footer from "../Components/Footer";

const Product  =()=> {


    return(
        <div>
       <Nav></Nav>
        <All_Services></All_Services>
        
      <div>
        <Footer></Footer>
      </div>
        </div>
 
    )
}

export default Product;