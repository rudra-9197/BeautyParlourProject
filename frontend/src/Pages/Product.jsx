import { useParams } from "react-router-dom";

const Product  =()=> {

let {id} = useParams();

    return(
     <div> i am here {id}</div>
    )
}

export default Product;