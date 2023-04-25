import React from "react";
import lottery from "../assets/lottery.webp";
import radioAcademy from "../assets/radio_academy.webp";
import pafc from "../assets/pafc.webp";
import fund from "../assets/fund.webp";
import clarion from "../assets/clarion.webp";
import qrcode from "../assets/qrcode.webp";

const Homepage = () => {
  return (
    <main className="container flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl my-6 font-semibold text-white max-w-[464px]">
        Ferndale Community Radio Plymouth
      </h1>
      <h2 className="text-lg text-white">
        'The very best internet radio station from FCTG'
      </h2>
      <p className="text-[1rem] text-white">
        Based in the port city of Plymouth - Devon - UK.
      </p>
      <div className="w-full bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6 rounded-t-xl">
        <div className="mt-2 text-center"></div>

        <div className="mt-6 grid grid-cols-3 grid-rows-2 justify-items-center 2xl:px-52">
          <img
            className="w-[80%] xl:w-[40%]  aspect-square object-contain"
            src={lottery}
            alt="lottery"
          />
          <img
            className="w-[80%] xl:w-[40%] aspect-square object-contain"
            src={radioAcademy}
            alt="radioAcademy"
          />
          <img
            className="w-[80%] xl:w-[40%] aspect-square object-contain "
            src={pafc}
            alt="pafc"
          />
          <img
            className="w-[80%] xl:w-[40%] aspect-square object-contain"
            src={fund}
            alt="fund"
          />
          <img
            className="w-[80%] xl:w-[40%] aspect-square object-contain"
            src={clarion}
            alt="clarion"
          />
          <img
            className="w-[80%] xl:w-[40%] aspect-square object-contain"
            src={qrcode}
            alt="qrcode"
          />
        </div>
        <div></div>
      </div>
      {/* <NewsList /> */}
    </main>
  );
};

export default Homepage;
