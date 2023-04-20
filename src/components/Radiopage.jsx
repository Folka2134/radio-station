import React from "react";

import studio from "../assets/studio.webp";
import Grid from "./Grid";

const Radiopage = () => {
  return (
    <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6">
      <h1 className="text-4xl md:text-4xl text-center font-semibold">
        STUDIO NUMBER ONE
      </h1>
      {/* <h1 className="text-4xl md:text-4xl text-center font-semibold">
        Ferndale Community Radio - Plymouth, Devon, UK.
      </h1> */}
      <div className="flex mt-7  w-full">
        <img className="w-96 float-right" src={studio} alt="studio" />
        <p className="text-[1rem]">Free Text in the UK 07451223412</p>
      </div>
      <div className="flex flex-col justify-center text-center">
        <h2 className="my-10">Presenters</h2>
        <Grid />
      </div>
      {/* <NewsList /> */}
    </main>
  );
};

export default Radiopage;
