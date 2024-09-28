import React, { useEffect, useState } from "react";



const RowBar = ()=>{
    
    let slideIndex = 1;
    let timeoutId = null; // Store timeout ID
  
  
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
        dots[i].style.background = "#ffff";
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].style.background = "#717171";
  
      timeoutId= setTimeout(showSlides, 5000); // Change image every 2 seconds
  

  
    
    }
  
 
    useEffect(() => {
        showSlides();
    
    
        return () => {
          if (timeoutId) {
            clearTimeout(timeoutId); // Stop the slideshow
            console.log("Slideshow stopped!");
          }
        };
    
        
      }, []);
    
      

    return(


        <div className="m-0">
        <div className="mx-auto shadow-lg p-4  overflow-hidden">
          <div className={"mySlides"}>
            <img
              src={require("../images/make-up-making.jpg")}
              alt="1stpic"
              className="w-3/4 h-96 mx-auto mt-4 rounded-md"
            />
          </div>
          <div className={"mySlides"}>
            <img
              src={require("../images/collection-beauty-products-with-copy-space.jpg")}
              alt="2ndpic"
              className="w-3/4 h-96  mx-auto mt-4 rounded-md"
            />
          </div>
          <div className={"mySlides  duration-1000"}>
            <img
              src={require("../images/make-up-artist-getting-model-ready-photoshootin.jpg")}
              alt="3rdpic"
              className="w-3/4 h-96 mx-auto mt-4 rounded-md"
            />
          </div>

          <div className="text-center pt-4">
            <div
              className={
                "dots h-3 w-3 m-o mx-2 my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
            <div
              className={
                " dots h-3 w-3 m-o mx-2  my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
            <div
              className={
                " dots h-3 w-3 m-o mx-2  my-2 rounded-full  inline-block transition ease-linear duration-300"
              }
            ></div>
          </div>
        </div>
      </div>

    );
}

export default RowBar;