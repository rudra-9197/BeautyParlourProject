import { useEffect } from "react";

const WelcomeBanner = () => {
  let slideIndex = 1;
  let timeoutId = null;

  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex = (slideIndex % slides.length) + 1;
    slides[slideIndex - 1].style.display = "block";
    timeoutId = setTimeout(showSlides, 5000);
  }

  useEffect(() => {
    showSlides();
    return () => timeoutId && clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative h-fit md:h-screen flex items-center justify-center">
      <div className="h-max">
        <div className="mySlides">
          <img
            src={require("../images/make-up-making.jpg")}
            alt="1stpic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mySlides">
          <img
            src={require("../images/collection-beauty-products-with-copy-space.jpg")}
            alt="2ndpic"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mySlides">
          <img
            src={require("../images/make-up-artist-getting-model-ready-photoshootin.jpg")}
            alt="3rdpic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 hidden md:block"></div>
      <div className="relative text-center text-white z-10 hidden md:block">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Dreams Studio and
          <p>Herbal Beauty Parlor</p>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-300">
          Where Every Look Begins with a Dream
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 animate-fade-in-up animation-delay-600">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default WelcomeBanner;
