document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "b8a1578e87253d5c39e83acd0ce5b364";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
    const weatherIcon = document.querySelector('.weather-icon');
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const container = document.querySelector(".container");
    const error = document.querySelector(".error");

    async function getWeather(city) {
        const response = await fetch(apiUrl + city + "&appId=" + apiKey);

        if(response.status == 404){
            error.style.display="block";
            container.style.display="none";
        }
        else{
            const data = await response.json();

        weatherIcon.src = `images/${data.weather[0].main}.png`;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C `;
        document.querySelector(".city").innerHTML = `${data.name}`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        error.style.display="none";
        console.log(data);
        }
        
    }

    searchBtn.addEventListener("click", () => {
        
        getWeather(searchBox.value);
        searchBox.value = "";
        container.style.display="block";
        
        
    })
})