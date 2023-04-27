import React, { useEffect } from "react";
import Weather from "./Weather";

const Homepage = () => {
  return (
    <main className="myContainer flex flex-col justify-center items-center text-center fadeInFast">
      <h1 className="text-4xl md:text-5xl lg:text-5xl 5xl:text-6xl my-6 font-semibold text-black dark:text-white max-w-[656px] lg:mt-12 5xl:mt-20">
        Ferndale Community Radio Plymouth
      </h1>
      <h2 className="text-lg text-black dark:text-white text-opacity-80">
        'The very best internet radio station from FCTG'
      </h2>
      <p className="text-[1rem] text-black dark:text-white text-opacity-80">
        Based in the port city of Plymouth - Devon - UK.
      </p>
      <div className="flex rounded-3xl bg-[url('./assets/plymouth.webp')] backdrop-blur-sm bg-white/30 backdrop-hue-rotate-90  bg-cover bg-top my-16 relative w-min">
        <div className="bg-black w-full h-full rounded-3xl bg-opacity-70 absolute -z-20"></div>
        <Weather />
      </div>
      {/* <NewsList /> */}
    </main>
  );
};

export default Homepage;
