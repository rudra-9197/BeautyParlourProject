import React, { useEffect, useState } from "react";

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].style.background = "#bbb";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.background = "#717171";

  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function App() {
  useEffect(() => {
    showSlides();
  }, []);

  return (
    <div className="w-screen h-screen p-0 b-0">
      <nav className="w-screen">
        <div className="flex flex-row bg-navpink">
          <div className="text-white p-4 w-fit mx-auto my-auto">
            <p className="text-white text-5xl font-Pacifico">
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

      <div className="bg-black relative ">
        <div className="shadow-lg   mx-auto  rounded-2xl border ">
          <div className={"mySlides  animate-pulse "}>
            <img
              src={require("./images/makeoverthanu1.jpg")}
              alt="1stpic"
              className="w-3/4 h-96 mx-auto mt-4 rounded-md"
            />
          </div>
          <div className={"mySlides animate-pulse "}>
            <img
              src={require("./images/makeoverthanu2.jpg")}
              alt="2ndpic"
              className="w-3/4 h-96  mx-auto mt-4 rounded-md"
            />
          </div>
          <div className={"mySlides animate-pulse duration-1000"}>
            <img
              src={require("./images/makeoverthanu3.jpg")}
              alt="3rdpic"
              className="w-3/4 h-96 mx-auto mt-4 rounded-md"
            />
          </div>

          <div className="text-center">
            <div
              className={
                "dots h-4 w-4 m-o mx-2 my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
            <div
              className={
                " dots h-4 w-4 m-o mx-2  my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
            <div
              className={
                " dots h-4 w-4 m-o mx-2  my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
