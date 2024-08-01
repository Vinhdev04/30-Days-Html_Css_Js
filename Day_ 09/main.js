document.addEventListener("DOMContentLoaded", function () {
  let search = document.querySelector(".search__name");
  let capital = document.querySelector(".title__capital");
  let nation = document.querySelector(".title__nation");
  let temperatureValue = document.querySelector(".temperature__value");
  let descWeather = document.querySelector(".desc__weather");
  let visible = document.querySelector(".visible span");
  let wind = document.querySelector(".wind span");
  let temp = document.querySelector(".temp span");
  let descTime = document.querySelector(".desc__time");
  let content = document.querySelector(".weather-content");
  let body = document.querySelector("body");

  async function getAPIWeather(cityName) {
    try {
      let apiKey = "8921539224fb0eb50f137c35ab436490";
      let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(weatherAPI);
      const data = await response.json();

      if (data.cod === 200) {
        content.classList.remove("hide");
        capital.innerText = data.name;
        nation.innerText = data.sys.country;
        visible.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + "m/s";
        temp.innerText = Math.round(data.main.temp);
        descWeather.innerText = data.weather[0] ? data.weather[0].main : "";
        descTime.innerText = new Date().toLocaleTimeString("vi");

        body.classList.remove("hot", "cool", "warm", "rain");
        if (data.main.temp < 17) {
          body.classList.add("cool");
        } else if (data.main.temp < 20) {
          body.classList.add("rain");
        } else if (data.main.temp < 30) {
          body.classList.add("warm");
        } else {
          body.classList.add("hot");
        }
      } else {
        content.classList.add("hide");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  search.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      let cityName = search.value.trim();
      getAPIWeather(cityName);
    }
  });

  // Mặc định hiển thị thời tiết cho "Hà Nội" khi trang web được load
  getAPIWeather();
});
