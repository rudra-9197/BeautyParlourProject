import React, { useEffect, useState } from "react";

const AllServices = () => {
  // State to handle the visibility of services
  const [showHairServices, setShowHairServices] = useState(false);
  const [showFaceServices, setShowFaceServices] = useState(false);
  const [showHandServices, setShowHandServices] = useState(false);
  const [showBridalServices, setShowBridalServices] = useState(false);

  // List of Hair Care services
  const hairCareServices = [
    "Haircut & Styling",
    "Hair Spa",
    "Hair Coloring",
    "Hair Smoothening",
    "Keratin Treatment",
    "Hair Highlights",
    "Scalp Treatment",
    "Dandruff Control",
  ];

  // List of Face and Skin Care services
  const faceCareServices = [
    "Facial",
    "Clean-up",
    "Acne Treatment",
    "Anti-aging Treatment",
    "Face Mask",
    "Exfoliation",
    "Moisturization",
    "Skin Polishing",
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
              <div key={index} className="  flex-row py-2 border-gray-300 mt-4 rounded-lg bg-grayc shadow-md h-fit flex items-center justify-between">
                <div className="m-2">
                  <h2 className="p-4 text-white">{service} 
                  <p className="text-navpink text-wrap">150 R.S</p>
                  </h2>
                  <p className="w-96 p-2 text-wrap ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, natus magni. Nobis ex libero impedit quo corporis quisquam error animi?</p>
                 
                  <button className="p-2 ml-2 bg-red rounded-lg">Book</button>
                </div>
                <div className="p-2">
                  <img className="w-fit h-fit rounded-md"src={require("../images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg")}></img>
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
