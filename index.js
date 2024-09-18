function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let emojiElement = document.querySelector("#emoji");
  
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
    emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji" />`;
}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function searchCity(city) {
    let apiKey = "c371b4330f228acfobbbd0e2a07t7d0a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Paris");

  function displayForecast() {
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";
  
    days.forEach(function (day) {
      forecastHtml =
        forecastHtml +
                    `<div class="day">
                    <div class="weather-forecast-date">${day}</div>
                    <div class="icon">🌥️</div>
                    <div class="forecast-temperatures">
                        <div class="forecast-temperature"><strong>15°C</strong></div>
                        <div class="forecast-temperature">9°C</div> 
                    </div>
                    </div>
                    `;
                  });

                  let forecastElement = document.querySelector("#forecast");
                  forecastElement.innerHTML = forecastHtml;
                }
                displayForecast();