import React, { useState } from "react";

const  All_Services= () =>{
  // State to handle the visibility of services
  const [showHairServices, setHairShowServices] = useState(false);
  const [showFaceServices, setFaceShowServices] = useState(false);

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

  const FaceCareServices = [
    "Haircut & Styling",
    "Hair Spa",
    "Hair Coloring",
    "Hair Smoothening",
    "Keratin Treatment",
    "Hair Highlights",
    "Scalp Treatment",
    "Dandruff Control",
  ];

  // Function to toggle services
  const toggleHairServices = () => {
    setHairShowServices(!showHairServices);
  };

  const toggleFaceServices = () => {
    setFaceShowServices(!showFaceServices);
  };

  return (
    <div className="max-w-md mr-auto mt-8 ml-6 flex flex-col">
      {/* Hair Care Button */}

      <div>
      <button
        onClick={toggleHairServices}
        className="bg-blue-500 py-2 border-b border-gray-300 last:border-b-0">
      
        Hair Care
      </button>

      {/* Conditionally render services when showServices is true */}
      {showHairServices && (
        <ul className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
          {FaceCareServices.map((service, index) => (
            <li key={index} className="py-2 border-b border-gray-300 last:border-b-0">
              {service}
            </li>
          ))}
        </ul>
      )}

      </div>

<div>
<button
        onClick={toggleFaceServices}
        className="bg-blue-500 py-2 border-b border-gray-300 last:border-b-0">
      
        Face Care
      </button>

      {/* Conditionally render services when showServices is true */}
      {showFaceServices && (
        <ul className="mt-4 bg-gray-100 p-4 rounded-md shadow-md">
          {hairCareServices.map((service, index) => (
            <li key={index} className="py-2 border-b border-gray-300 last:border-b-0">
              {service}
            </li>
          ))}
        </ul>
      )}
</div>


    </div>
  );
}

export default All_Services;
