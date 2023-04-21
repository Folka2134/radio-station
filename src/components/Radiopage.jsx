import React from "react";

import studio from "../assets/studio.webp";
import Grid from "./Grid";
import Carousel from "./Carousel";

const Radiopage = () => {
  return (
    <main className=" bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6 rounded-t-xl">
      <div>
        <h1 className="text-3xl md:text-3xl text-center font-semibold pt-12 pb-5">
          Studio Number One
        </h1>
        {/* <h1 className="text-4xl md:text-4xl text-center font-semibold">
        Ferndale Community Radio - Plymouth, Devon, UK.
      </h1> */}
        <div className="flex flex-col md:flex-row justify-center items-center my-6">
          <img
            className="w-96 rounded-3xl shadow-xl"
            src={studio}
            alt="studio"
          />
          <div className="md:ml-12 text-center">
            <p className="text-xl">
              We are now on air 24 hours a day, 7 days a week.
            </p>
            <p className="text-xl">Free Text in the UK 07451223412</p>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col w-full justify-center text-center">
          <h2 className="">Presenters</h2>
          <Carousel />
        </div>
        {/* <NewsList /> */}
      </div>
    </main>
  );
};

export default Radiopage;
