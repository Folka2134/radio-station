import React from "react";

const Radiopage = () => {
  return (
    <main className=" myContainer flex flex-col justify-center items-center fadeInFast">
      <h1 className="text-3xl text-right my-6 font-semibold text-black dark:text-white max-w-[656px] lg:mt-12 5xl:mt-20">
        Get in touch
      </h1>
      <div className="text-[1rem] text-black dark:text-white my-10 text-center ">
        <h3>Office Opening Times</h3>
        <p>Monday 9:30 - 12:30 | 1:30 - 4:30</p>
        <p>Tuesday 1 pm - 4 pm</p>
        <p>Wednesday 9:30 - 12:30 | 1:30 - 4:30</p>
      </div>
      <div className="text-center text-[1rem] text-black dark:text-white px-6 3xl:px-24 4xl:px-52 5xl:px-[30rem]">
        <p>Telephone: 01752-312428 between 9am & 5pm</p>
        <p>Mobile: 07458-302444</p>
        <p>Email: ferndale.plymouth@gmail.com</p>
        <p>Free Text in the UK 07451223412 </p>
      </div>
    </main>
  );
};

export default Radiopage;
