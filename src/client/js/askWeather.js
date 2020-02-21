export const askWeather = async () => {
    const key = '&units=metric&APPID=7888326b26769e661345dc10ca117453';
    const baseUrl = '//api.openweathermap.org/data/2.5/weather?q=';
    const city = document.getElementById('city').value; 
    fetch(baseUrl + city + key)
    .then(res => {
        return res.json()
    })
    .then(data => {
            document.getElementById('temp').innerHTML = `In ${city} the temperature is ${data.main.temp}°C.`;
        }
)
};

