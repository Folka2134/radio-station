import React, { useEffect } from "react";

const Weather = () => {
  const API_KEY = "f6b39355d32df8d5b4bb9916251c1611";

  function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // showWeatherData(data);
        });
    });
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className=" p-5 z-0 w-full">
      <div className="text-white">
        <div class="future-forecast flex  text-white justify-center items-center">
          {/* <div class="today" id="current-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              class="w-icon"
            />
            <div class="other">
              <div class="day">Monday</div>
              <div class="temp">Night - 25.6&#176; C</div>
              <div class="temp">Day - 35.6&#176; C</div>
            </div>
          </div> */}

          <div class="weather-forecast flex" id="weather-forecast">
            <div class="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div class="day bg-[#3C3C44] rounded-lg text-center">Tue</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                class="w-icon"
              />
              <div class="temp font-semibold">Night - 25.6&#176; C</div>
              <div class="temp font-semibold">Day - 35.6&#176; C</div>
            </div>
            <div class="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div class="day">Wed</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                class="w-icon"
              />
              <div class="temp font-semibold">Night - 25.6&#176; C</div>
              <div class="temp font-semibold">Day - 35.6&#176; C</div>
            </div>
            <div class="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div class="day">Thur</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                class="w-icon"
              />
              <div class="temp font-semibold">Night - 25.6&#176; C</div>
              <div class="temp font-semibold">Day - 35.6&#176; C</div>
            </div>
            <div class="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div class="day">Fri</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                class="w-icon"
              />
              <div class="temp font-semibold">Night - 25.6&#176; C</div>
              <div class="temp font-semibold">Day - 35.6&#176; C</div>
            </div>
            <div class="weather-forecast-item flex flex-col items-center justify-center m-4">
              <div class="day">Sat</div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                class="w-icon"
              />
              <div class="temp font-semibold">Night - 25.6&#176; C</div>
              <div class="temp font-semibold">Day - 35.6&#176; C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
