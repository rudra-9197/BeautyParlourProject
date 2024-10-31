import { useNavigate } from "react-router-dom";
import Product from "../Pages/Product";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another page (Page2)
    navigate("/Product");
  };

  return (
    <div className=" shadow-lg flex flex-col-reverse lg:flex-row items-center justify-around">
      <div className="mx-auto items-center flex flex-col ">
        <p className=" hidden lg:block text-center lg:text-center  font-medium text-2xl p-4 lg:p-0 w-4/5 font-crismon   ">
          Welcome to Dreams Beauty Parlour, where beauty meets precision! We
          believe that every individual deserves to feel confident and radiant
          in their own skin. Our team of skilled professionals is dedicated to
          providing personalized beauty solutions tailored to enhance your
          natural glow. Whether you're here for a luxurious spa day, a fresh
          haircut, or a stunning makeover, we promise an experience that will
          leave you feeling pampered and rejuvenated. Step i to our world of
          elegance, where self-care meets style, and let us help you shine like
          never before!
        </p>

        <p className="block lg:hidden text-center lg:text-center  font-medium text-2xl pt-8 lg:p-0 w-4/5 font-crismon   ">
          Welcome to Dreams Beauty Parlour—where confidence meets radiance!
          Indulge in personalized beauty care that enhances your glow and lets
          you shine like never before.
        </p>

        <button
          onClick={handleClick}
          className=" mt-4 text-white p-4 px-8 mb-4 lg:mb-0 rounded-full hover:shadow-2xl hover:z-10 bg-Blue hover:bg-lightBlue  "
        >
          Our Services
        </button>
      </div>
      <div className="max-w-sm  hidden lg:block">
        <img
          className="my-6 pr-4"
          src={require("../images/6242769.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
