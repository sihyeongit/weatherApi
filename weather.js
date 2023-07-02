

const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9779&appid=${myAPI}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        document.getElementById("name").innerText = data.name;
        document.getElementById("weather").innerText = data.weather[0].main;
        document.getElementById("celsius").innerText = Math.round(data.main.temp);
        if(weather.innerText == "Clear"){
            document.getElementById("icons").src = "img/Clear.png";
        } else if (weather.innerText == "Mist"){
            document.getElementById("icons").src = "img/Cloudy.png";
        } else if (weather.innerText == "Clouds"){
            document.getElementById("icons").src = "img/Cloudy.png";
        } else if(weather.innerText == "Rain"){
            document.getElementById("icons").src = "img/Rain.png";
        }
    })
    
    