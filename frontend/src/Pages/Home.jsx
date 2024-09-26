import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another page (Page2)
    navigate("/Product");
  };

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

    // return () => {
    //   if (timeoutId) {
    //     clearTimeout(timeoutId); // Stop the slideshow
    //     console.log("Slideshow stopped!");
    //   }
    // };

  
  }

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getProductTitle");

      const { ProductTitle } = response.data[0];

      const newArray = [...ProductTitle];

      const logdata = setTitle(newArray);

      console.log(logdata);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  const [title, setTitle] = useState([]);

  useEffect(() => {
    showSlides();



    fetchData();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Stop the slideshow
        console.log("Slideshow stopped!");
      }
    };

    
  }, []);



  {
    return (
      <div className="w-screen h-screen p-0 b-0">
        <nav className="w-screen">
          <div className="flex flex-row bg-purple">
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

        <div className="m-0">
          <div className="mx-auto shadow-lg p-4  ">
            <div className={"mySlides   "}>
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

        <div className=" ">
          <div class="bg-grayd mx-auto">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
            <div class="  flex  justify-around justify-items-center">
              {title.map((item) => {
                return (
                  <div class="group relative m-5" onClick={handleClick}>
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75   lg:h-80">
                      <img
                        src={require("../images/1705470309.266x330px Image-03.jpg")}
                        alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full group-hover:animate-bounce "
                      ></img>
                    </div>
                    <div class="mt-4 text-center">
                      <div>
                        <h3 class="text-lg ml-10 text-red">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            {item}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl">
              <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Company
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class=" hover:underline">
                        About
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Careers
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Brand Center
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Help center
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Discord Server
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Twitter
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Facebook
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Licensing
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Download
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        iOS
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Android
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Windows
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        MacOS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                  © 2024 <a href="https://flowbite.com/">Rudra Aradhya</a>. All
                  Rights Reserved.
                </span>
                <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span class="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">GitHub account</span>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
};

export default Home;
