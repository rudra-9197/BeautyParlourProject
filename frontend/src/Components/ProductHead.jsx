import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const ProductHead = () => {
  const [title, setTitle] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current && title.length > 0) {
      const middleIndex = Math.floor(title.length / 2);
      const middleCard = scrollContainerRef.current.children[middleIndex];
      middleCard?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [title]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://beautyparlourproject.onrender.com/getProductTitle"
      );
      const { ProductTitle } = response.data[0];
      const newArray = [...ProductTitle];
      setTitle(newArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative max-h-max">
      <div
        className="bg-grayd mx-auto mt-4 flex flex-row content-center items-center overflow-x-auto"
        ref={scrollContainerRef}
      >
        {title.map((item, index) => (
          <div key={index} className="flex flex-row">
            <div className="group m-5 w-max z-0">
              <div className="aspect-h-1 aspect-w-1 w-40  rounded-md bg-gray-200 lg:aspect-none lg:h-80 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <img
                  src={require("../images/1705470309.266x330px Image-03.jpg")}
                  alt="Product Image"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg ml-10 text-red">
                  <a href="#">
                    <span aria-hidden="true"></span>
                    {item}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHead;
