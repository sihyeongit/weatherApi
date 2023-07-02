
const myAPI = "7d7b09576a372bcffbb8aaa084540a8f"

document.getElementById("myweather").addEventListener("click",function(){
    function geoOK(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPI}&units=metric`;
        console.log(url);
        fetch(url).then(response => response.json()).then(data => {
            const namename = document.getElementById("name");
            namename.textContent = data.name;
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
    }
    function geoNOK(){
        alert("위치를 알 수 없습니다.")
    }
    navigator.geolocation.getCurrentPosition(geoOK,geoNOK);
    
    
})



