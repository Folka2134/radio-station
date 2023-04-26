import React from "react";

const Homepage = () => {
  return (
    <main className="myContainer flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-5xl 5xl:text-6xl my-6 font-semibold text-white max-w-[656px] lg:mt-12 xl:mt-24">
        Ferndale Community Radio Plymouth
      </h1>
      <h2 className="text-lg text-white text-opacity-80">
        'The very best internet radio station from FCTG'
      </h2>
      <p className="text-[1rem] text-white text-opacity-80">
        Based in the port city of Plymouth - Devon - UK.
      </p>

      {/* <NewsList /> */}
    </main>
  );
};

export default Homepage;
