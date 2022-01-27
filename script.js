
import data from "./config.js";
console.log(data.key);

const weather = {
    apiKey: data.key,
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey)
        .then((response) => {
          if (!response.ok) {
            alert("city name is not correct !");
            
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    
    displayWeather: function (data) {
        const { name } = data;                          //object destructuring , basic assignment
        const { icon, description } = data.weather[0];  
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;

        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector(".description").innerText = description;

        document.querySelector(".temp").innerText = temp + "°C";

        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";

        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";

        
        document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
     },

      search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click",()=> {
      weather.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", (event)=> { 
        if (event.key == "Enter") { // enter key active for search using event OR e :)
          weather.search();
        }
      });
    
    weather.fetchWeather("ghent");   // call gent as standerd
    