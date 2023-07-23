const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
//new code begains from here
  // scripts.js custom js file
  


const searchbox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const button = document.getElementById('btn');
const weatherIcon = document.querySelector('.weather-icon');

button.addEventListener('click',checkWeather)

function checkWeather(city){
    fetch(apiUrl + city +`&appid=${apiKey}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data)
      document.getElementById('city').innerHTML = data.name + ",  " + data.sys.country;
      document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C";
      document.getElementById('wind').innerHTML = data.wind.speed + "kph";
      document.getElementById('humidity').innerHTML = data.main.humidity + "%";
      document.getElementsByClassName('weather-icon').innerHTML = data.weather.icon;
      
      if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
      }
      else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";

      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";

      }
      else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";

      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";

      }
      
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    searchBtn.addEventListener('click',() =>{
      checkWeather(searchbox.value);
    
    });
       
};








