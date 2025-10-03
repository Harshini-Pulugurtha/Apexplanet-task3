const weatherForm = document.getElementById("weatherForm");
const citySelect = document.getElementById("citySelect");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

// Get API key from .env
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const city = cityInput.value.trim() || citySelect.value;

  if (!city) {
    weatherResult.innerHTML = "<p>⚠️ Please select or enter a city.</p>";
    return;
  }

  weatherResult.innerHTML = "<p>Loading...</p>";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${OPENWEATHER_API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        weatherResult.innerHTML = `<p>❌ ${data.message}</p>`;
        return;
      }

      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      const country = data.sys.country;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      weatherResult.innerHTML = `
        <h3>${data.name}, ${country}</h3>
        <img src="${iconUrl}" alt="weather icon" />
        <p><strong>${desc}</strong></p>
        <p>🌡️ Temp: ${temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(() => {
      weatherResult.innerHTML = "<p>⚠️ Failed to fetch weather.</p>";
    });
});
