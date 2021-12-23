

// API_KEY for maps api
let API_KEY = "92e6061da3fb27744fbd01bc42b3aae7";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL=`${URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const weatherPromise= fetch(FULL_URL);
   return weatherPromise.then((res)=>{
     return res.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
    console.log(res);
  })
}

showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText=weatherData.name;
  document.getElementById('weather-type').innerText=weatherData.weather[0].main;
  document.getElementById('temp').innerText=weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add('visible');
  
}