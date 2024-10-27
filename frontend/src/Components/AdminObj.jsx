import axios from "axios";
import { useState } from "react";

const AdminObj = () => {
  const [loading, setLoading] = useState(false);
  let prodctArray = [];
  function addProd() {
    let prodctName = document.querySelectorAll(".prodname");
    prodctName.forEach((product) => {
      prodctArray.push(product.value);
    });

    updateProduct();

    prodctName.forEach((product) => {
      product.value = "";
    });
  }

  const updateProduct = async () => {
    setLoading(true);
    const response = await axios.get("https://beautyparlourproject.onrender.com/getProductTitle");

    console.log(response);

    const { ProductTitle } = response.data[0];

    let ID = response.data[0]._id;
    console.log(ID);
    const newArray = [...ProductTitle];

    await axios
      .post(`https://beautyparlourproject.onrender.com/updateProductTitle/${ID}`, {
        ProductTitle: prodctArray,
      })
      .then((response) => {
        setLoading(false);
        
        alert("Updated Successfully");
        console.log("Array updated successfully:", response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating array:", error);
      });
  };

  const [showProduct, setShowProduct] = useState(false);

  const UpdateShowProduct = () => {
    setShowProduct(!showProduct);
  };

  return (
    <div className="grid grid-cols-2 w-screen border-2 justify-around">
      <div>
        <div className="p-4 bg-lightBlue text-white w-60 m-4">
          <button onClick={UpdateShowProduct}>Product</button>
        </div>
        <div className="p-4 bg-lightBlue text-white w-60 m-4">Users</div>
        <div className="p-4 bg-lightBlue text-white w-60 m-4">Bookings</div>
      </div>

      {showProduct && (
        <div className=" items-start flex flex-row">
          <div>
            <label>Product1:</label>
            <input
              type="text"
              name="Product1"
              className="prodname border-2  w-16 m-2"
            />

            <label>Product2:</label>
            <input
              type="text"
              name="Product2"
              className="prodname border-2  w-16 m-2"
            />

            <label>Product3:</label>
            <input
              type="text"
              name="Product3"
              className="prodname border-2  w-16 m-2"
            />

            <label>Product4:</label>
            <input
              type="text"
              name="Product4"
              className="prodname border-2  w-16 m-2"
            />
          </div>

          {loading ? (
          <div>
            <img
              className="w-24 h-24"
              src={require("../images/Spinner@1x-1.0s-200px-200px.gif")}
              alt="description"
            />
          </div>
        ):
            (

              <div className="flex justify-center mt-4">
              <button
                className="mx-auto p-2 bg-navpink text-center items-center"
                onClick={addProd}
              >
                Submit
              </button>
            </div>
            )


    }
        </div>
      )}

    </div>
  );
};

export default AdminObj;
