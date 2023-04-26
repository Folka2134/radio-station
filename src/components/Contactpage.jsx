import React from "react";

const Radiopage = () => {
  return (
    <main className=" bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6 rounded-t-xl fadeInFast">
      <h1 className="text-4xl md:text-4xl text-center font-semibold">
        Get in touch
      </h1>
      <div className="my-10 text-center">
        <h3>Office Opening Times</h3>
        <p>Monday 9:30 - 12:30 | 1:30 - 4:30</p>
        <p>Tuesday 1 pm - 4 pm</p>
        <p>Wednesday 9:30 - 12:30 | 1:30 - 4:30</p>
      </div>
      <div className="text-left text-[1rem] px-6 3xl:px-24 4xl:px-52 5xl:px-[30rem]">
        <p>Telephone: 01752-312428 between 9am & 5pm</p>
        <p>Mobile: 07458-302444</p>
        <p>Email: ferndale.plymouth@gmail.com</p>
        <p>Free Text in the UK 07451223412 </p>
      </div>
    </main>
  );
};

export default Radiopage;
