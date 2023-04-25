import React, { useState } from "react";

import "./App.css";
import logo from "./assets/fcrlive.webp";
import logoGofundme from "./assets/gofundme-blog-image.webp";
import background from "./assets/plymouth.webp";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import NewsList from "./components/NewsList";
import Homepage from "./components/Homepage";
import Radiopage from "./components/Radiopage";
import Contactpage from "./components/Contactpage";

function renderSwitch(param) {
  switch (param) {
    case "home":
      return <Homepage />;
    case "radio":
      return <Radiopage />;
    case "contact":
      return <Contactpage />;
    default:
      return <Homepage />;
  }
}

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="App ">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div> */}
      <div className="bg-[#0E1012] bg-fixed bg-cover min-h-screen relative flex flex-col items-center ">
        {/* NAV */}
        <nav className="flex sticky top-0 w-full justify-end md:justify-center  md:bg-opacity-90 text-gray-300  border-opacity-40 rounded-b-lg md:mb-10 z-20">
          <ul className="hidden md:flex">
            <button
              className="text-xl p-5 cursor-pointer hover:text-white transition-all duration-200"
              onClick={() => setRoute("home")}
            >
              Home
            </button>
            <button
              className="text-xl p-5 cursor-pointer hover:text-white transition-all duration-200"
              onClick={() => setRoute("radio")}
            >
              Radio
            </button>
            {/* <button
                className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200"
                onClick={() => setRoute("news")}
              >
                News
              </button> */}
            <button
              className="text-xl p-5 cursor-pointer hover:text-white transition-all duration-200"
              onClick={() => setRoute("contact")}
            >
              Contact
            </button>
          </ul>
          <div className="block md:hidden w-full p-4">
            <RxHamburgerMenu size={50} color="white" />
          </div>
        </nav>
        {/* <section className="advertisement 2xl:flex flex-col just bg-black w-96 2xl:w-40 3xl:w-48 4xl:w-60 5xl:w-80 absolute hidden bottom-0 2xl:top-28 2xl:right-0 rounded-lg h-min">
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
        </section> */}
        <div className="mx-6 lg:mx-12 xl:mx-24 2xl:mx-44 3xl:mx-52 4xl:mx-72 5xl:mx-96 z-10 relative">
          <header className=" flex flex-col md:flex-row justify-center md:justify-between items-center pt-3 mb-3">
            <div className="flex justify-center md:mr-5 mb-2">
              <img
                className="max-h-80 md:h-full rounded-full"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="hidden md:block max-h-96 h-52 bg-[#242424] bg-opacity-80 text-white w-full rounded-3xl p-3">
              banner
            </div>
          </header>
          {/* <div className="sticky top-16">
            PLAYER
            <div className="mx-6 lg:mx-12 xl:mx-24 2xl:mx-44 3xl:mx-52 4xl:mx-72 5xl:mx-60 flex h-32 bg-[#242424] bg-opacity-90 rounded-xl mb-1 text-white border-2 border-black border-opacity-50 p-2">
              <div className="h-full w-full">
                <div>currently playing</div>
                <button>listen live ^^</button>
              </div>
              <div className="h-full w-full">
                <h2>Request a song!</h2>
              </div>
            </div>
          </div> */}
          {/* Render Main */}
          <div className="flex flex-col">{renderSwitch(route)}</div>
        </div>
        <footer className=" bg-[#1D1D1D] bg-opacity-70 rounded-b-xl text-gray-300 border-2 border-black border-opacity-40 w-full">
          <div className="flex justify-between pl-5 pr-0 py-2 ">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center bg-white rounded-full p-1">
                <BsFacebook
                  className="p-2 cursor-pointer"
                  size={50}
                  color="#1877F2"
                />
                <BsTwitter
                  className="p-2 cursor-pointer"
                  size={50}
                  color="#1B9DF0"
                />
              </div>
              <div className="object-contain w-40 ml-3">
                <img
                  className="h-16 md:h-20 cursor-pointer"
                  src={logoGofundme}
                  alt="logoGofundme"
                />
              </div>
            </div>
            <ul className="flex flex-col justify-center items-end">
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Privacy
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Staff
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Advertisements
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                FCR Policies
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                FCTG
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
