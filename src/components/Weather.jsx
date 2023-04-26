import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");

  const API_KEY = "f6b39355d32df8d5b4bb9916251c1611";

  async function getWeatherData() {
    await navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      // console.log(latitude, longitude);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=50.3755&lon=-4.1427&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        });
    });
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="p-4 z-0 w-full">
      <div className="text-white">
        <div className="future-forecast flex  text-white justify-center items-center relative">
          <div className="absolute top-0 left-0">
            <h4 className="">{weatherData.name}</h4>
          </div>

          <div
            className="weather-forecast grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row mt-5"
            id="weather-forecast"
          >
            <div className="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div className="day bg-[#3C3C44] rounded-lg text-center">Tue</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div className="temp font-semibold">Night - 25.6&#176;</div>
              <div className="temp font-semibold">Day - 35.6&#176;</div>
            </div>
            <div className="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div className="day">Wed</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div className="temp font-semibold">Night - 25.6&#176;</div>
              <div className="temp font-semibold">Day - 35.6&#176;</div>
            </div>
            <div className="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div className="day">Thur</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div className="temp font-semibold">Night - 25.6&#176;</div>
              <div className="temp font-semibold">Day - 35.6&#176;</div>
            </div>
            <div className="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div className="day">Fri</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div className="temp font-semibold">Night - 25.6&#176;</div>
              <div className="temp font-semibold">Day - 35.6&#176;</div>
            </div>
            <div className="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div className="day">Sat</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div className="temp font-semibold">Night - 25.6&#176;</div>
              <div className="temp font-semibold">Day - 35.6&#176;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
