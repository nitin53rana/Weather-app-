function getWeather() {
    const city = document.getElementById('cityInput').value;
    const weatherBox = document.getElementById('weatherResult');

    const temp = Math.floor(Math.random() * 15) + 20; // Random temp between 20°C - 35°C
    const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Windy", "Foggy"];
    const desc = conditions[Math.floor(Math.random() * conditions.length)];

    weatherBox.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${desc}</p>
    `;
}
