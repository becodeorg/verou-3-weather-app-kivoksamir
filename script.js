
import data from "./config.js";
console.log(data.key);    // test


    const apiKey= data.key;
    

    const fetchWeather= function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city +
        "&units=metric&appid="+apiKey)

        .then((response) => {
          if (!response.ok) {   // check if the respond is not ok .. 
            alert("city name is not correct !");
            
          }
          return response.json();    // convert response to json to be accessible  .. this return new promis
        })
        .then((data) =>displayWeather(data)); // so we need new (then) (there are our actual data)
    };


    
    const  displayWeather= function (data) {
        const { name } = data;                          //object destructuring , basic assignment
        const { icon, description } = data.weather[0];  
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const {country}=data.sys;  // add the country code
        let country_name=country.toLowerCase(); // convert it to lowerCase
        

        document.querySelector(".city").innerText = "Weather in " + name;

        document.querySelector(".icon").src ="http://openweathermap.org/img/w/"+icon+".png";

        document.querySelector(".description").innerText = description;

        document.querySelector(".temp").innerText = temp + "°C";

        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";

        document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";

        document.querySelector(".country_code").innerHTML=country;

        
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";

      document.querySelector(".flag").src="http://openweathermap.org/images/flags/"+country_name+".png";
     } ; 

      const search = function () {
        fetchWeather(document.querySelector(".search-bar").value);
      };
    
    
    document.querySelector(".search button").addEventListener("click",()=> {search()});
    
    document.querySelector(".search-bar").addEventListener("keyup", (event)=> { 
        if (event.key == "Enter") { search();
        }
      });
    
      fetchWeather("ghent");   // call gent as standerd
    