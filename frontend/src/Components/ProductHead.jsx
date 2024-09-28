import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductHead = () => {
  useEffect(() => {
    
    fetchData();


  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getProductTitle");

      const { ProductTitle } = response.data[0];

      const newArray = [...ProductTitle];

      const logdata = setTitle(newArray);

      console.log(logdata);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  const [title, setTitle] = useState([]);

  return (
    <div className=" ">
      <div className="bg-grayd mx-auto mt-4">
        <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900">
          Services
        </h2>
        <div className=" grid  grid-cols-4 ">
          {title.map((item) => {
            return (
              <div className="group relative m-5 w-2/3">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75   lg:h-80">
                  <img
                    src={require("../images/1705470309.266x330px Image-03.jpg")}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:animate-bounce "
                  ></img>
                </div>
                <div className="mt-4 text-center">
                  <div>
                    <h3 className="text-lg ml-10 text-red">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {item}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductHead;
