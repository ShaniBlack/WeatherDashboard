// let citySelect = document.querySelector("#city-Date");
let currentTemp = document.querySelector("#currentTemp");
let currentHumidity = document.querySelector("#currentHumidity");
let currentWind = document.querySelector("#currentWind");
let currentUV = document.querySelector("#currentUV");

let forecastDate = document.querySelector(".forecastDate");
let forecastTemp = document.querySelector(".forecastTemp");
let forecastHumidity = document.querySelector(".forecastHumidity");

let searchBtn = document.querySelector(".searchBtn")[0];


// let searchedCities = [];

let citySearch = "Dallas"
// = function () {
//     localStorage.setItem("cities", JSON.stringify(cities))
    // console.log(citySearch);
    
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+citySearch+"&appid=a0bdc75e456395fd26ff4125346516e4";
    
    let req = new Request(url)
    fetch(url)
    .then((response) => response.json())
    .then((response) => {
        let fahrTemp = (response.main.temp - 273.15) * 1.80 + 32;
       
        $("#citySelect").html("<h2>"+response.name+"</h2>");
        // $("#currentTemp").text("Temperature (K) " + response.main.temp);
        $("#currentTemp").text("Temperature " + fahrTemp.toFixed(0));
        $("#currentHumidity").text("Humidity: " + response.main.humidity + "%");
        $("#currentWind").text("Wind Speed: " + response.wind.speed + "MPH");

})


   
