import React from "react";

import studio from "../assets/studio.webp";
import Grid from "./Grid";

const Radiopage = () => {
  return (
    <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl py-16 px-[10%]">
      <h1 className="text-4xl md:text-4xl text-center font-semibold">
        STUDIO NUMBER ONE
      </h1>
      {/* <h1 className="text-4xl md:text-4xl text-center font-semibold">
        Ferndale Community Radio - Plymouth, Devon, UK.
      </h1> */}
      <div className="flex flex-col md:flex-row justify-center items-center my-16  w-full">
        <img className="w-96 rounded-3xl" src={studio} alt="studio" />
        <div className="md:ml-12 text-center">
          <p className="text-xl">
            We are now on air 24 hours a day, 7 days a week.
          </p>
          <p className="text-xl">Free Text in the UK 07451223412</p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2 className="mb-7">Presenters</h2>
        <Grid />
      </div>
      {/* <NewsList /> */}
    </main>
  );
};

export default Radiopage;
