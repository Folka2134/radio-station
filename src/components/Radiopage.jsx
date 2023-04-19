import React from "react";

import studio from "../assets/studio.webp";

const Homepage = () => {
  return (
    <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6">
      <h1 className="text-5xl md:text-6xl text-center font-semibold">
        Ferndale Community Radio - Plymouth, Devon, UK.
      </h1>
      <div className="mt-2 text-center">
        <h2 className="text-lg">STUDIO NUMBER ONE</h2>
        <p className="text-[1rem]">
          Ferndale Community Radio, FCR for short, is an online based community
          radio station operating out of the Ferndale Community Hub. FCR
          provides information and entertainment to the local communities in and
          around Plymouth, while also being open to the UK and other countries
          around the world. We are now on air 24 hours a day, 7 days a week.
          Download the App from Google Play or Apple for easier listening, also
          available on Amazon Alexa.
        </p>
      </div>

      {/* <NewsList /> */}
    </main>
  );
};

export default Homepage;
