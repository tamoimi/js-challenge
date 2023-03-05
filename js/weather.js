const API_KEY = "1a953f5fc9922a0be4aecd3c3e8f81e3";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = `🏠 ${data.name}`;
      weather.innerText = `${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert("Can't fint you. No weather for you 😥");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
