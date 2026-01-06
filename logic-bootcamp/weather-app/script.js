// https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1
const unitNumber = document.querySelector("#unitNumber");
const inputValue = document.querySelector("#search");
const searchBtn = document.querySelector("#searchBtn");
const currentTemp = document.querySelector("#temp");
const countryCity = document.querySelector("#countryCity");
const currentCityDate = document.querySelector("#currentCityDate");
const feelsLike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const precipitation = document.querySelector("#precipitation");
const dailyForecast = document.querySelector("#dailyForeCast");
const ddlDay = document.querySelector("#ddlDay");
const hourlyHours = document.querySelector("#hourly__hours");

let hourlyData = null;
let apiStartDate = null;

async function getWeatherData() {
  let search = inputValue.value;

  if (!search) return;

  const WEATHER_URI = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

  const response = await fetch(WEATHER_URI);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  loadLocationData(data);

  const { lat, lon } = data[0];
  getWeatherByCoords(lat, lon);
}

function loadLocationData(locationData) {
  const location = locationData[0].address;

  const cityName = location.city;
  const countryName = location.country_code.toUpperCase();

  let dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  };

  const currentDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date()
  );

  countryCity.textContent = `${cityName},${countryName}`;
  currentCityDate.textContent = currentDate;
}

async function getWeatherByCoords(lat, lon) {
  const unit = unitNumber.value;
  const temperatureUnit = unit === "F" ? "fahrenheit" : "celsius";

  const WEATHER_URI =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
    `&hourly=temperature_2m,weather_code,precipitation` +
    `&temperature_unit=${temperatureUnit}` +
    `&timezone=auto`;

  const response = await fetch(WEATHER_URI);
  const data = await response.json();

  hourlyData = data.hourly;
  apiStartDate = data.daily.time[0];
  updateUI(data.current);
  dailyForecastHandler(data.daily);
  showHourlyForecast(
    new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase()
  );
}

function updateUI(current) {
  currentTemp.textContent = `${current.temperature_2m}`;
  feelsLike.textContent = `${Math.round(current.temperature_2m)}°`;
  humidity.textContent = `${current.relative_humidity_2m}%`;
  wind.textContent = `${current.wind_speed_10m} km/h`;
  precipitation.textContent = `${current.precipitation ?? 0} mm`;
}

function dailyForecastHandler(dailyWeatherData) {
  dailyForecast.innerHTML = "";

  const daysToShow = 7;

  for (let index = 0; index < daysToShow; index++) {
    let date = new Date(dailyWeatherData.time[index]);
    let dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    const maxTemp = Math.round(dailyWeatherData.temperature_2m_max[index]);
    const minTemp = Math.round(dailyWeatherData.temperature_2m_min[index]);

    const dayHTML = `
            <div class="block daily__day">
              <p class="daily__day-title">${dayOfWeek}</p>
              <img
               src="./assets/images/${weatherIcons(
                 dailyWeatherData.weather_code[index]
               )}"
                alt=""
                width="320"
                height="320"
                class="daily__day-icon" />
              <div class="daily__day-temps">
                <p class="day-high-temp">${maxTemp}&deg;</p>
                <p class="daily__day-low">${minTemp}&deg;</p>
              </div>
            </div>
    `;
    dailyForecast.insertAdjacentHTML("beforeend", dayHTML);
  }
}

function weatherIcons(code) {
  if (code === 0) return "icon-sunny.webp";

  if (code === 1 || code === 2) return "icon-partly-cloudy.webp";

  if (code === 3) return "icon-overcast.webp";

  if (code === 45 || code === 48) return "icon-fog.webp";

  if (code >= 51 && code <= 57) return "icon-drizzle.webp";

  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82))
    return "icon-rain.webp";

  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86))
    return "icon-snow.webp";

  if (code >= 95) return "icon-storm.webp";

  return "icon-sunny.webp";
}

function showHourlyForecast(selectedDay) {
  if (!hourlyData || !apiStartDate) return;

  hourlyHours.innerHTML = "";

  const startDate = new Date(apiStartDate);
  const dayIndex = getDayIndex(selectedDay);

  const selectedDate = new Date(startDate);
  selectedDate.setDate(startDate.getDate() + dayIndex);

  const selectedDateString = selectedDate.toISOString().split("T")[0];

  for (let i = 0; i < hourlyData.time.length; i++) {
    if (hourlyData.time[i].startsWith(selectedDateString)) {
      const time = hourlyData.time[i].split("T")[1];
      const temp = Math.round(hourlyData.temperature_2m[i]);
      const icon = weatherIcons(hourlyData.weather_code[i]);

      const hourHTML = `
        <div class="hourly__hour">
          <p>${time}</p>
          <img src="./assets/images/${icon}" alt="" width="50" />
          <p>${temp}&deg;</p>
        </div>
      `;

      hourlyHours.insertAdjacentHTML("beforeend", hourHTML);
    }
  }
}

function getDayIndex(day) {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return days.indexOf(day);
}

searchBtn.addEventListener("click", getWeatherData);
unitNumber.addEventListener("change", getWeatherData);
ddlDay.addEventListener("change", (e) => {
  showHourlyForecast(e.target.value);
});
