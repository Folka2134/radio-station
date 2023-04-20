import React from "react";

import studio from "../assets/studio.webp";

const Radiopage = () => {
  return (
    <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6">
      <h1 className="text-4xl md:text-4xl text-center font-semibold">
        Ferndale Community Radio - Plymouth, Devon, UK.
      </h1>
      <div className="flex flex-col mt-2 text-center">
        <h2 className="text-lg font-bold">STUDIO NUMBER ONE</h2>
        <div className="flex flex-col xl:flex-row">
          <img className="" src={studio} alt="studio" />
          <p className="text-[1rem]"></p>
        </div>
      </div>
      {/* <NewsList /> */}
    </main>
  );
};

export default Radiopage;
