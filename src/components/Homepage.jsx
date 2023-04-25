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
      <div className="w-full text-white p-6 rounded-t-xl">
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3  gap-2 justify-items-center 2xl:px-52">
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain"
            src={lottery}
            alt="lottery"
          />
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain mix-blend-color-burn"
            src={radioAcademy}
            alt="radioAcademy"
          />
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain mix-blend-color-burn"
            src={fund}
            alt="fund"
          />
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain mix-blend-color-burn"
            src={pafc}
            alt="pafc"
          />
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain mix-blend-color-burn"
            src={clarion}
            alt="clarion"
          />
          <img
            className="w-[80%] xl:w-[60%] aspect-[3/2] object-contain mix-blend-color-burn"
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
