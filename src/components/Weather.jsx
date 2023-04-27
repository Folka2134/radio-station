import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");

  const API_KEY = "8a32bc17bfde477e8d8175552211011";

  async function getWeatherData() {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Plymouth&days=3&aqi=no&alerts=no`
    );
    try {
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {}
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="p-4 z-0 w-full">
      <div className="text-white">
        <div className="future-forecast flex  text-white justify-center items-center relative">
          <div className="absolute top-0 left-0">
            <h4 className="">{weatherData && weatherData.location.name}</h4>
          </div>

          {weatherData ? (
            <div
              className="weather-forecast grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row mt-5"
              id="weather-forecast"
            >
              {weatherData &&
                weatherData.forecast.forecastday.map((weather, weatherKey) => (
                  <div
                    key={weatherKey}
                    className="weather-forecast-item flex flex-col items-center justify-center m-4 h-full md:w-52"
                  >
                    <div className="day bg-[#3C3C44] bg-opacity-20 rounded-lg text-center">
                      {new Date(weather.date).toLocaleString("en-US", {
                        weekday: "long",
                      })}
                    </div>
                    <img
                      src={weather.day.condition.icon}
                      alt="weather icon"
                      className="w-icon w-20"
                    />
                    <div className="temp font-semibold py-2">
                      {weather.day.condition.text}
                    </div>
                    <div className="temp font-semibold">
                      temp - {weather.day.avgtemp_c}&#176;
                    </div>
                    <div className="temp font-semibold">
                      Wind - {weather.day.maxwind_mph}mph
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="w-52">No weather data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
