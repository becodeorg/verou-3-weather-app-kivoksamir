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


export default displayWeather;