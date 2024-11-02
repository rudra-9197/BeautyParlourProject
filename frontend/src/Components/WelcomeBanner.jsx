import { useEffect } from "react";

const WelcomeBanner = () => {
  let slideIndex = 1;
  let timeoutId = null; // Store timeout ID

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    timeoutId = setTimeout(showSlides, 6000); // Change image every 2 seconds
  }

  useEffect(() => {
    showSlides();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Stop the slideshow
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Welcome Banner 
      <img
        src={require("../images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg")}
        alt="Dreams Beauty Parlor"
        className="absolute inset-0 w-full h-full object-cover"
      />*/}
      <div>
        <div className={"mySlides"}>
          <img
            src={require("../images/make-up-making.jpg")}
            alt="1stpic"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className={"mySlides"}>
          <img
            src={require("../images/collection-beauty-products-with-copy-space.jpg")}
            alt="2ndpic"
            className="absolute inset-0  w-full h-full object-cover"
          />
        </div>
        <div className={"mySlides "}>
          <img
            src={require("../images/make-up-artist-getting-model-ready-photoshootin.jpg")}
            alt="3rdpic"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4  ">
            Dreams Studio and
            <p> Herbal Beauty Parlor</p>
          </h1>
          <p className="text-2xl md:text-3xl mb-8  animate-fade-in-up animation-delay-300">
            Where Every Look Begins with a Dream
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 animate-fade-in-up animation-delay-600">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
