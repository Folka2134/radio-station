import React, { useEffect } from "react";

const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";

const Homepage = () => {
  function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // showWeatherData(data);
        });
    });
  }
  getWeatherData();

  return (
    <main className="myContainer flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-5xl 5xl:text-6xl my-6 font-semibold text-black dark:text-white max-w-[656px] lg:mt-12 5xl:mt-20">
        Ferndale Community Radio Plymouth
      </h1>
      <h2 className="text-lg text-black dark:text-white text-opacity-80">
        'The very best internet radio station from FCTG'
      </h2>
      <p className="text-[1rem] text-black dark:text-white text-opacity-80">
        Based in the port city of Plymouth - Devon - UK.
      </p>
      <div className="hidden lg:block h-[250px] 2xl:h-[250px] bg-[#242424] bg-opacity-90 text-black dark:text-white w-full rounded-3xl bg-[url('./assets/plymouth.webp')] bg-cover bg-top my-16"></div>
      {/* <NewsList /> */}
      {/* Weather */}
    </main>
  );
};

export default Homepage;
