import React from "react";
import lottery from "../assets/lottery.webp";
import radioAcademy from "../assets/radio_academy.webp";
import pafc from "../assets/pafc.webp";
import fund from "../assets/fund.webp";
import clarion from "../assets/clarion.webp";
import qrcode from "../assets/qrcode.webp";

const Homepage = () => {
  return (
    <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6">
      <h1 className="text-5xl md:text-6xl text-center font-semibold">
        Ferndale Community Radio Plymouth
      </h1>
      <div className="mt-2 text-center">
        <h2 className="text-lg">
          'The very best internet radio station from FCTG'
        </h2>
        <p className="text-[1rem]">
          Based in the port city of Plymouth - Devon - UK.
        </p>
        <p className="text-[1rem] pt-4 2xl:px-52">
          Ferndale Community Radio, FCR for short, is an online based community
          radio station operating out of the Ferndale Community Hub. FCR
          provides information and entertainment to the local communities in and
          around Plymouth, while also being open to the UK and other countries
          around the world. We are now on air 24 hours a day, 7 days a week.{" "}
        </p>
      </div>

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
      {/* <NewsList /> */}
    </main>
  );
};

export default Homepage;
