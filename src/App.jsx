import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import NewsList from "./components/NewsList";
import Homepage from "./components/Homepage";
import Radiopage from "./components/Radiopage";
import Contactpage from "./components/Contactpage";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

import "./App.css";

import logo from "./assets/fcrlive.webp";
import logoGofundme from "./assets/gofundme-blog-image.webp";
import lottery from "./assets/lottery.webp";
import radioAcademy from "./assets/radio_academy.webp";
import pafc from "./assets/pafc.webp";
import fund from "./assets/fund.webp";
import clarion from "./assets/clarion.webp";
import qrcode from "./assets/qrcode.webp";

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
  const [theme, setTheme] = useState("light");
  const [route, setRoute] = useState("home");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="App bg-white dark:bg-[#0E1012] min-h-screen flex justify-center items-center">
      {loading ? (
        <ClipLoader color={"#36d7b7"} loading={loading} size={50} />
      ) : (
        <div className="flex flex-col bg-white dark:bg-[#0E1012] min-h-screen relative fadeIn">
          {/* NAV */}
          <nav className="flex sticky  top-0 w-full  md:justify-center bg-white dark:bg-[#0E1012] bg-opacity-80  backdrop-blur-md  backdrop-grayscale text-black dark:text-gray-300  border-opacity-40 rounded-b-lg md:mb-10 z-20">
            {/* <div></div> */}
            <ul className="hidden md:flex ">
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
              <button
                className="text-xl p-5 cursor-pointer hover:text-white transition-all duration-200"
                onClick={() => setRoute("contact")}
              >
                Contact
              </button>
            </ul>
            <div className="block md:hidden w-full p-4">
              <RxHamburgerMenu
                size={50}
                color={theme === "dark" ? "white" : "black"}
              />
            </div>
            <button
              className="absolute right-0 p-6 "
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? (
                <BsFillSunFill size={25} className="fadeInFast" />
              ) : (
                <BsFillMoonFill size={25} className="fadeInFast" />
              )}
            </button>
          </nav>
          {/* <section className="advertisement 2xl:flex flex-col w-96 2xl:w-40 3xl:w-48 4xl:w-60 5xl:w-80 absolute hidden bottom-0 2xl:top-28 2xl:right-0 rounded-lg h-min">
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
          <div className="border-white border-2 text-white ">Advert</div>
        </section> */}
          <div className="mx-6 lg:mx-12 xl:mx-24 2xl:mx-44 3xl:mx-52 4xl:mx-72 5xl:mx-96 z-10 relative">
            <header className="flex flex-col md:flex-row justify-center items-center pt-3 mb-3">
              <div className="flex justify-center md:mr-5 mb-2 ">
                <img
                  className="max-h-60 md:h-full rounded-full float-right"
                  src={logo}
                  alt="logo"
                />
              </div>
              {/* PLAYER */}
              <div className="flex flex-col h-60 w-60 text-center bg-[#242424] rounded-xl text-white p-2 mt-5 md:mt-0 mx-6">
                <div className="h-full w-full border-2 border-white rounded-xl mb-2">
                  <div>Listen Live</div>
                  <button className="mt-14">
                    <BsFillPlayFill size={35} />
                  </button>
                </div>
                <div className="bg-white rounded-xl text-black">
                  <h2>Make a request!</h2>
                </div>
              </div>
            </header>
            <div className="sticky top-16"></div>
            <div className="flex flex-col mb-10">{renderSwitch(route)}</div>
          </div>
          <footer className="flex flex-col md:flex-row justify-center items-center py-4 bg-[#1D1D1D] text-gray-300 mt-auto">
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
            <div className=" text-white p-6 rounded-t-xl ">
              <div className="md:mt-6 flex flex-wrap justify-center gap-5">
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={lottery}
                  alt="lottery"
                />
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={fund}
                  alt="fund"
                />
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={radioAcademy}
                  alt="radioAcademy"
                />
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={pafc}
                  alt="pafc"
                />
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={clarion}
                  alt="clarion"
                />
                <img
                  className="w-[20%] xl:w-[10%] aspect-[3/2] object-contain"
                  src={qrcode}
                  alt="qrcode"
                />
              </div>
            </div>
            <ul className="flex md:flex-col gap-2 md:justify-center md:items-end">
              <li className="md:px-5 py-1 cursor-pointer hover:text-white">
                Privacy
              </li>
              <li className="md:px-5 py-1 cursor-pointer hover:text-white">
                Staff
              </li>
              <li className="md:px-5 py-1 cursor-pointer hover:text-white">
                Advertisements
              </li>
              <li className="md:px-5 py-1 cursor-pointer hover:text-white">
                FCR Policies
              </li>
              <li className="md:px-5 py-1 cursor-pointer hover:text-white">
                FCTG
              </li>
            </ul>
          </footer>
        </div>
      )}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div> */}
    </div>
  );
}

export default App;
