const apiKey = "65f1c7f625945146f7f0032194220857";

const form = document.querySelector("form");
const cityInput = document.getElementById("City-Name");

const cityName = document.querySelector(".City-Name");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".Icon img");

const feelsLike = document.querySelector(".details div:nth-child(1)");
const humidity = document.querySelector(".details div:nth-child(2)");
const wind = document.querySelector(".details div:nth-child(3)");

form.addEventListener("submit", function(e){

    e.preventDefault(); // stop page refresh

    const city = cityInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.cod === "404"){
            alert("City not found");
            return;
        }

        console.log(data);

        cityName.innerHTML = data.name;

        temp.innerHTML = Math.round(data.main.temp) + "°C";

        desc.innerHTML = data.weather[0].description;

        feelsLike.innerHTML = "Feels like: " + Math.round(data.main.feels_like) + "°C";

        humidity.innerHTML = "Humidity: " + data.main.humidity + "%";

        wind.innerHTML = "Wind speed: " + data.wind.speed + " km/h";

      const weatherMain = data.weather[0].main;
      const iconCode = data.weather[0].icon;

        if(weatherMain === "Clear"){
            if(iconCode.includes("n")){
        icon.src = "moon.png";
            }else{
            icon.src = "clear.png";
            }
        }
        else if(weatherMain === "Clouds"){
            if(iconCode.includes("n")){
                icon.src = "half-moon.png";
            }else{
            icon.src = "clouds.png";
            }
        }
        else if(weatherMain === "Rain"){
            icon.src = "rain.png";
        }
        else if(weatherMain === "Drizzle"){
            icon.src = "drizzle.png";
        }
        else if(weatherMain === "Mist"){
            icon.src = "mist.png";
        }
        else if(weatherMain == "Clear"){
            icon.src = "clear.png";
        }
            else if(weatherMain == "Snow"){
                icon.src = "snow.png";
      }
            else if(weatherMain == "Haze"){
                  icon.src = "haze.png";
            }

            else if(weatherMain == "ThunderStorm"){
                icon.src = "thunderstorm.png";
            }

            else{
                icon.src = "clear.png";
            }
                
            
        
    })
    .catch(error => {
        console.log(error);
        alert("Error fetching weather data");
    });

});
