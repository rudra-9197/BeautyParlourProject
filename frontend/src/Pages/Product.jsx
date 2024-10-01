import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import All_Services from "../Components/All_Services";
import Footer from "../Components/Footer";

const Product = () => {
  return (
    <div className="flex flex-col h-screen">
        <div className=""> 

        <Nav></Nav>
        </div>
 

      <div className="flex grow">
      <All_Services ></All_Services>
      </div>
      

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Product;
