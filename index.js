const apiKey = "278bb0a2a13a7f6e84d79cf72c8fd289";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

    
        if (data.cod !== '404') {
            cityElement.innerHTML = data.name;
            tempElement.innerHTML = Math.round(data.main.temp) + "°C";
            humidityElement.innerHTML = data.main.humidity + "%";
            windElement.innerHTML = data.wind.speed + " km/hr";
        } else {
      
            alert('City not found. Please enter a valid city name.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
     
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
