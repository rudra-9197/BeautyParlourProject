import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-rose-600">
          Dreams Studio and Herbal Beauty Parlor
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="#about" className="text-gray-700 hover:text-rose-600">
            About
          </Link>
          <Link to="#services" className="text-gray-700 hover:text-rose-600">
            Services
          </Link>
          {/*  <Link href="#offers" className="text-gray-700 hover:text-rose-600">
            Offers
  </Link>*/}
         <Link to="#gallery" className="text-gray-700 hover:text-rose-600">
            Gallery
          </Link>

          <Link to="#contact" className="text-gray-700 hover:text-rose-600">
            Contact
          </Link>

        </div>
      </div>

      {/* Navigation
      
           <nav className="w-screen overflow-hidden">
    <div className="flex flex-row bg-purple">
      <div className="text-white p-4 w-fit mx-auto my-auto">
        <p className="text-white text-2xl font-Pacifico lg:text-5xl md:text-3xl">
          Dreamz Studio and Herbal Beauty Parlor
        </p>
      </div>
      <div className="p-6 w-fit my-auto mr-2 ml-auto">
        <div className="p-0.5 bg-white w-10 my-2"></div>
        <div className="p-0.5 bg-white w-10 my-2"></div>
        <div className="p-0.5 bg-white w-10 my-2"></div>
      </div>
    </div>
    </nav>
      
      
      */}
    </nav>
  );
};

export default Nav;
