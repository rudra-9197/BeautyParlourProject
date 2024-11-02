import About from "../Components/About";
import Service from "../Components/Service";
import RowBar from "../Components/Rowbar";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ProductHead from "../Components/ProductHead";
import BeautyParlor from "../Components/Home1";

import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [titles, setTitle] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://beautyparlourproject.onrender.com/getProductTitle"
        );

        const { ProductTitle } = response.data[0];
        setTitle([...ProductTitle]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData().then((resp)=> setLoading(false) );
  }, []);

  return (
    <div className="w-screen h-screen p-0 b-0 mx-auto my-auto">
      {loading ? (
        <div className="fixed inset-0 flex  items-center justify-center w-screen h-screen">
          <div className="relative w-40 h-40 p-2 rounded-full">
            <div className="absolute inset-0 animate-spin bg-gradient-to-r p-2 from-red-500 via-white to-blue-500 rounded-full"></div>
            <div className="relative w-full h-full bg-white rounded-full"></div>
          </div>
        </div>
      ) : (
        <div>
            <BeautyParlor/>
        </div>
      )}
    </div>
  );
};

export default Home;
