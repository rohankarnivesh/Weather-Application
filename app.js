let weather = {
    "apiKey": "16fc7962a27cec2fe99a4861888e5219",//Use Your Own API From OpenWeatherMap.org
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+ this.apiKey
        )
            .then((response)=> response.json())
            .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".wind").innerText = "Wind \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+ speed +"Km/hr";
        document.querySelector(".desp").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+humidity+"%";
        document.querySelector(".card").classList.remove("loading");
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("nagpur");
