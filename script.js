
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


    
    import displayWeather from "./display.js"; // import , export 


      const search = function () {
        fetchWeather(document.querySelector(".search-bar").value);
      };
    
    
    document.querySelector(".search button").addEventListener("click",()=> {search()});
    
    document.querySelector(".search-bar").addEventListener("keyup", (event)=> { 
        if (event.key == "Enter") { search();
        }
      });
    
      fetchWeather("ghent");   // call gent as standerd
    