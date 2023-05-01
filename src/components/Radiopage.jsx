import React from "react";

import studio from "../assets/studio.webp";
import Grid from "./Grid";
import Carousel from "./Carousel";

const Radiopage = () => {
  return (
    <main className="myContainer flex flex-col justify-center items-center fadeInFast">
      <h3 className="text-3xl text-right my-6 font-semibold text-black dark:text-white max-w-[656px] lg:mt-12 5xl:mt-20">
        Studio Number One
      </h3>

      <div className="flex flex-col items-center max-w-[656px] lg:max-w-[1000px] w-full  text-black dark:text-white">
        <div className="flex flex-col justify-center items-center my-10 max-w-[556px]">
          <img
            className="w-96 rounded-3xl shadow-xl"
            src={studio}
            alt="studio"
          />
          <p className="text-[1rem] text-center mt-5 ">
            Ferndale Community Radio, FCR for short, is an online based
            community radio station operating out of the Ferndale Community Hub.
            FCR provides information and entertainment to the local communities
            in and around Plymouth, while also being open to the UK and other
            countries around the world. We are now on air 24 hours a day, 7 days
            a week.{" "}
          </p>
        </div>
        <div className="flex flex-col text-center w-[500px] lg:w-[800px] 2xl:ml-10">
          <h2 className="text-center">Presenters</h2>
          <Carousel />
        </div>
      </div>
      {/* <div className="flex flex-col w-full justify-center text-center">
        <h2>Schedule</h2>
      </div> */}

      {/* <NewsList /> */}
    </main>
  );
};

export default Radiopage;
