const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

const apiKey = "15e018411c4870b637dadb3b4aff62eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${cityName}`);
    var data = await response.json();
    document.getElementById("temperature").innerHTML = data.main.temp;
    document.getElementById("humidity").innerHTML = data.main.humidity;
}

checkWeather('Bengaluru');