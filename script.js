
import data from "./config.js";
console.log(data.key);    // test



const weather = {
    apiKey: data.key,
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city +
        "&units=metric&appid="+ weather.apiKey)

        .then((response) => {
          if (!response.ok) {   // check if the respond is not ok .. 
            alert("city name is not correct !");
            
          }
          return response.json();    // convert response to json to be accessible  .. this return new promis
        })
        .then((data) => weather.displayWeather(data)); // so we need new (then) (there are our actual data)
    },

    
    displayWeather: function (data) {
        const { name } = data;                          //object destructuring , basic assignment
        const { icon, description } = data.weather[0];  
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const {country}=data.sys;  // add the country code
        let country_name=country.toLowerCase(); // convert it to lowerCase

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

      document.querySelector(".flag").src="http://openweathermap.org/images/flags/"+country_name+".png";
     },

      search: function () {
        weather.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    document.querySelector(".search button").addEventListener("click",()=> {
      weather.search();
    });
    
    document.querySelector(".search-bar").addEventListener("keyup", (event)=> { 
        if (event.key == "Enter") { // enter key active for search using event OR e :)
          weather.search();
        }
      });
    
    weather.fetchWeather("ghent");   // call gent as standerd
    