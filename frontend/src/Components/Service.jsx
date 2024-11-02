
import { useState } from 'react'


import hairStylingImage from '../images/Untitled design.svg';
import ManicureImage from '../images/Manicure.svg';
import FacialImage from '../images/Facial.svg';
import BridalImage from '../images/Bridal.svg';
import SpaImage from '../images/Spa.svg';
import Home_Hair_Care from '../images/Home_Hair_Care.svg';
import Home_beauty_parkour from '../images/Home_beauty_parkour.svg';
import Home_Spa from '../images/Home_Spa.svg';


const Service = () => {


  const [activeService, setActiveService] = useState(null) 

  const services = [
    { name: 'Hair Styling', description: 'Transform your look with our expert stylists.', image: hairStylingImage },
    { name: 'Facials', description: 'Rejuvenate your skin with our luxurious facial treatments.', image: FacialImage },
    { name: 'Manicures', description: 'Pamper your hands with our deluxe manicure services.', image: ManicureImage },
    { name: 'Bridal Makeup', description: 'Enhance your natural beauty with our professional makeup artists.', image: BridalImage },
    { name: 'Spa Services', description: 'Relax and unwind with our range of spa treatments.', image: SpaImage },
  ]

  const homeServices = [
    { name: 'Home Hair Care', description: 'Expert hair styling and care in the comfort of your home.', image: Home_Hair_Care },
    { name: 'Mobile Makeup', description: 'Professional makeup services for any occasion, right at your doorstep.', image: Home_beauty_parkour},
    { name: 'In-Home Spa', description: 'Luxurious spa treatments brought to your personal space.', image: Home_Spa },
  ]


  return (
    <section id='services' className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
              onTouchMove={() => setActiveService(index)}
              onTouchEnd={() => setActiveService(null)}
            >
              <img
                src={service.image}
                alt={service.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {service.name}
                </h3>
                <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition duration-300">
                    Learn More
                  </button>
                  <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-pink-500 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Home Services Highlight */}
        <div className="bg-pink-200 rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-bold mb-4 text-center text-pink-700">
            Home Services
          </h3>

          <h2 className='text-xl font-semibold text-pink-800 mb-4 text-center'>Avaliable In and around Kortagere and Tumkur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeServices.map((service, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl bg-white shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-pink-600">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition duration-300 w-full">
                    Book Home Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    /*
    <div>
      <div className=" shadow-lg text-center ">
        <div className="p-12 ">
          <h1 className="p-4 text-4xl font-crismon">Book Your Appointment</h1>

          <p className="text-center mx-auto font-medium text-2xl max-w-screen-md lg:w-1/2 font-crismon  ">
            Looking for a quick makeover or a relaxing beauty treatment? Choose
            your service, select a time, and book with ease. Your beauty journey
            starts here—secure your spot today!
          </p>

      
          <button className="mt-4 text-white p-4 px-6 rounded-2xl hover:shadow-2xl hover:z-10 bg-lightred  hover:bg-red *:border-2 border-black ">
            Book Now
          </button>
        </div>
      </div>
    </div> */
  );
};

export default Service;
