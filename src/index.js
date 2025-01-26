const searchCity = document.querySelector(".search-city");
const searchButton = document.querySelector(".search-button");
const cityName = document.querySelector(".city-name");
const dateCity = document.querySelector(".date");
const mainWeather = document.querySelector(".main-weather");
const temperature = document.querySelector(".temperature");
const temperatureP = document.querySelector(".temperature-p");
const weatherNextDays = document.querySelector(".weather-next-days");
const minTemperature = document.querySelector(".min-temp");
const maxTemperature = document.querySelector(".max-temp");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
async function fetchData() {
  const apiKey = "00fd49e0c84dd3196a19c57ba81d9d8b";
  function handleName(event) {
    const city = searchCity.value;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const lon = data?.coord?.lon;
        const lat = data?.coord?.lat;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        )
          .then((response) => response.json())

          .then((data2) => {
            //city name//
            cityName.innerHTML = `${data2?.name}`;
            //city name//
            //date//
            const date = new Date();
            const year = date.getDate();
            const month = date.getUTCMonth() + 1;
            const day = date.getUTCFullYear();
            dateCity.innerHTML = `${year} ${month} ${day}`;
            //date//
            //temp-weather//
            const weatherType = data2?.weather[0]?.main;
            console.log(weatherType);
            mainWeather.innerHTML = `${weatherType}`;
            //temp-weather//
            //temperature//
            const temp = Math.floor(data2?.main.temp - 273);
            temperature.innerHTML = `${temp}°`;
            //temperature//
            //min-temp//
            const minT = Math.floor(data2?.main?.temp_min - 273);
            minTemperature.innerHTML = `${minT}°`;
            console.log(minT);
            //min-temp//
            //max-temp//
            const maxT = Math.floor(data2?.main?.temp_max - 273);
            maxTemperature.innerHTML = `${maxT}°`;
            //max-temp//
            //wind-speed//
            const windS = data2?.wind?.speed;
            windSpeed.innerHTML = `${windS}`;
            //wind-speed//
            //humidity//
            const hum = data2?.main?.humidity;
            humidity.innerHTML = `${hum}%`;
            //humidity//
           
          });
      });
  }

  searchButton.addEventListener("click", handleName);
}

fetchData();
