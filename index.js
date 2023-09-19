const apiKey ="68b1dcb864d95e6ff55520d15bea6b64";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchButton");
const imageWeather = document.querySelector("#weatherImg")


async function checkWeather(city) {
const cityInput = document.getElementById("cityInput").value;
const response = await fetch(apiUrl + cityInput + `&appid=${apiKey}`);
const data = await response.json();

document.getElementById("temperature").textContent = `${data.main.temp}°C`;
document.getElementById("cityName").textContent = data.name;
document.getElementById("humidity").textContent = `${data.main.humidity}%`;
document.getElementById("windSpeed").textContent = `${data.wind.speed} Km/h`;

if(data.weather[0].main == "Clouds"){
    imageWeather.src ="clouds.png";
}else if(data.weather[0].main == "Wind"){
    imageWeather.src ="wind.png";
}else if(data.weather[0].main == "Clear"){
    imageWeather.src ="clear.png";
}else if(data.weather[0].main == "Drizzle"){
    imageWeather.src ="drizzle.png";
}else if(data.weather[0].main == "Humidity"){
    imageWeather.src ="humidity.png";
}else if(data.weather[0].main == "Mist"){
    imageWeather.src ="mist.png";
}else if(data.weather[0].main == "Rain"){
    imageWeather.src ="rain.png";
}else if(data.weather[0].main == "Snow"){
    imageWeather.src ="snow.png";
}
}

//call the function when you hit search 
searchBtn.addEventListener("click",() => {
checkWeather(searchBox.value);
})
