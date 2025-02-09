async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Get your API key from openweathermap.org
    const city = document.getElementById("cityInput").value;
    
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("weatherInfo").classList.remove("hidden");
        document.getElementById("cityName").textContent = `Weather in ${data.name}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to get weather data. Try again later.");
    }
}
