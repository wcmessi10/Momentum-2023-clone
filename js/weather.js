const API_KEY = "10f2b2b93d9820dc5170aa45e24e1d1c";

function onGeoOK(position){//잘됐을 때 실행될 함수
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}

function onGeoError(){//에러 발생시 실행할 함수
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
//현재 사용자의 위치를 나타내는 js(잘됏을 때 실행될 함수, 에러시 실행될 함수)