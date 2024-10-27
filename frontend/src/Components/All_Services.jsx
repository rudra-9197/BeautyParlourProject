import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay(bookReq) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razropay failed to load!!");
    return;
  }

  console.log(bookReq.price);

  try {
    const response = await fetch("https://beautyparlourproject.onrender.com/createOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        amount: bookReq.price,
      }),
    });

    const data = await response.json();

    if (data) {
      const Paymntdet = data.data;

      const options = {
        key: "rzp_test_3ZkshMAHdkZBQe", // Enter the Key ID generated from the Dashboard
        // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        amount: Paymntdet.amount,
        currency: Paymntdet.currency,
        name: "Acme Corp",
        description: "Test Transaction",

        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        prefill: {
          name: "Gaurav Kumar",
          email: "aryacreative001@gmail.com",
          contact: "9740236784",
        },
        theme: {
          color: "#F37254",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  } catch (error) {
    alert(error.message);
  }
}

const AllServices = () => {
  // State to handle the visibility of services
  const [showHairServices, setShowHairServices] = useState(false);
  const [showFaceServices, setShowFaceServices] = useState(false);
  const [showHandServices, setShowHandServices] = useState(false);
  const [showBridalServices, setShowBridalServices] = useState(false);

  // List of Hair Care services
  const hairCareServices = [
    { id: "108", name: "Facial", price: "100" },
    {
      id: "109",
      name: "Clean-up",
      price: "150",
    },
    {
      id: "110",
      name: "Acne Treatment",
      price: "2000",
    },
  ];

  // List of Face and Skin Care services
  const faceCareServices = [
    {
      id: "108",
      name: "Facial",
      price: "100",
    },
    {
      id: "109",
      name: "Clean-up",
      price: "150",
    },
    {
      id: "110",
      name: "Acne Treatment",
      price: "2000",
    },
  ];

  const BridalServices = ["Glam-e", "saree drape"];

  const HandServices = ["polish", "Nail art"];

  // List of all main services
  const allServices = [
    { name: "Hair Care", toggleFunction: () => toggleHairServices() },

    {
      name: "Face and Skin Care",
      toggleFunction: () => toggleFaceServices(),
    },
    {
      name: "Bridal Services",
      toggleFunction: () => toggleBridalServices(),
    }, // Placeholder for future services
    {
      name: "Hands and Feet",
      toggleFunction: () => toggleHandServices(),
    },
    // Placeholder for future services
  ];

  const toggleHairServices = () => {
    setShowHairServices(!showHairServices);
    setShowFaceServices(false);
    setShowHandServices(false);
    setShowBridalServices(false);
  };

  const toggleBridalServices = () => {
    setShowBridalServices(!showBridalServices);
    setShowFaceServices(false);
    setShowHandServices(false);
    setShowHairServices(false);
  };

  const toggleHandServices = () => {
    setShowHandServices(!showHandServices);
    setShowFaceServices(false);
    setShowHairServices(false);
    setShowBridalServices(false);
  };

  const toggleFaceServices = () => {
    setShowFaceServices(!showFaceServices);
    setShowHandServices(false);
    setShowBridalServices(false);
    setShowHairServices(false);
  };

  useEffect(() => {
    setShowHairServices(true);
  }, []);

  return (
    <div className="mr-auto flex flex-row h-max overflow-hidden justify-center w-screen ">
      {/* Service Buttons */}
      <div className="flex flex-col border-2 w-60 ml-6 my-4 rounded-2xl h-fit">
        {/* Render Buttons for All Services */}
        {allServices.map((service, ind) => (
          <button
            onClick={service.toggleFunction}
            key={ind}
            className="bg-blue-500  py-2 border-b border-gray-300 hover:bg-blue-600"
          >
            {service.name}
          </button>
        ))}
      </div>

      <div className="w-1/2 overflow-y-scroll scroll-smooth h-96 mt-4">
        {/* Conditionally render Hair Care services */}
        {showHairServices && (
          <div className="mx-4 bg-gray-100 p-4 rounded-md border-2 h-fit ">
            {hairCareServices.map((service, index) => (
              <div
                key={index}
                className="  flex-row py-2 border-gray-300 mt-4 rounded-lg bg-grayc shadow-md h-fit flex items-center justify-between"
              >
                <div className="m-2">
                  <h2 className="p-4 text-white">
                    {service.name}
                    <p className="text-navpink text-wrap">
                      {service.price} R.S
                    </p>
                  </h2>
                  <p className="w-96 p-2 text-wrap ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil, natus magni. Nobis ex libero impedit quo corporis
                    quisquam error animi?
                  </p>

                  <button
                    onClick={() => {
                      displayRazorpay(service);
                    }}
                    className="p-2 ml-2 bg-red rounded-lg"
                  >
                    Book
                  </button>
                </div>
                <div className="p-2">
                  <img
                    className="w-fit h-fit rounded-md"
                    src={require("../images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg")}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conditionally render Face and Skin Care services */}
        {showFaceServices && (
          <div className="mx-4 bg-gray-100 p-4 rounded-md">
            {faceCareServices.map((service, index) => (
              <div
                key={index}
                className="py-2 border-gray-300 mt-4 rounded-lg bg-grayc shadow-md h-20 flex items-center justify-center"
              >
                {service}
              </div>
            ))}
          </div>
        )}

        {/* Conditionally render hand and leg Care services */}
        {showHandServices && (
          <div className="mx-4 bg-gray-100 p-4 rounded-md">
            {HandServices.map((service, index) => (
              <div
                key={index}
                className="py-2 border-gray-300 mt-4 rounded-lg bg-grayc shadow-md h-20 flex items-center justify-center"
              >
                {service}
              </div>
            ))}
          </div>
        )}

        {/* Conditionally render hand and leg Care services */}
        {showBridalServices && (
          <div className="mx-4 bg-gray-100 p-4 rounded-md">
            {BridalServices.map((service, index) => (
              <div
                key={index}
                className="py-2 border-gray-300 mt-4 rounded-lg bg-grayc shadow-md h-20 flex items-center justify-center"
              >
                {service}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
