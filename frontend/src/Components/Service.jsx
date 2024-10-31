const Service = () => {
  return (
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
    </div>
  );
};

export default Service;
