
var uri = "https://api.openweathermap.org/data/2.5/weather?lat=40.7608&lon=-111.8910&units=metric&appid=117dc4bba31cb1ddc1ceeb399015666e"

const getInformation = function(){

    fetch(uri)
    .then((response) => response.json())
    .then((data) => console.log(data));         
}

function getInformation2(){
    fetch(uri)
    // Gets Api call
    .then(
        function(response){
            return response.json();
        }
        // Get the json object with the information
    ).then(function (jsonObject){

        console.log(jsonObject);
        
        const {name} = jsonObject;
        const {temp} = jsonObject.main;

        let weatherObject = {
            cityName: name, 
            temperature: temp
        }

        processWeatherResponse(weatherObject);

        
    })    
}

function processWeatherResponse(obj){

    let cityText = document.getElementsByClassName("city-wrapper")[0];
    cityText.innerHTML = obj.cityName; 

    let weatherText = document.getElementsByClassName("temp-wrapper")[0];
    weatherText.innerHTML = obj.temperature;

}