var searchButton = document.getElementById("searchButton");
var chosenCity = document.getElementById("chosenCity");
var lat;
var long;
var city;
var apiKey = "60b15dc2ca51943d0218839ff06ace5e";

var dayOneBox = document.getElementById("oneDay");
var dayTwoBox = document.getElementById("twoDay");
var dayThreeBox = document.getElementById("threeDay");
var dayFourBox = document.getElementById("fourDay");
var dayFiveBox = document.getElementById("fiveDay");
var todayBox = document.getElementById("showingWeatherFor");
var showCityName = document.getElementById("showCityName");
var tomorrowBox = document.getElementById("tomorrowWeather")

  
searchButton.addEventListener("click", function() {
  city = chosenCity.value;
  localStorage.setItem('cityName', JSON.stringify(city));
  makeForecastUrlwithLatandLon()
})

function makeForecastUrlwithLatandLon() {
  var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(cityUrl)
    .then(response => response.json())

    .then(response => {
      console.log(response)
      let latitude = response.coord.lat;
      let longitude = response.coord.lon;
      let forecastUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=60b15dc2ca51943d0218839ff06ace5e&units=imperial";
      console.log(forecastUrl)
    
      fetch(forecastUrl)
      .then(response => response.json())
     .then(response => 
      {
      console.log(response)
      let temp = response.daily[0].temp.day + " Fahrenheit"; 
      let wind = response.daily[0].wind_speed + " MPH"; //
      let humidity = "Humidity is " + response.daily[0].humidity + "%"; 
      let icon = response.daily[0].weather[0].icon;
      let dateStamp = response.daily[0].dt ;
      let iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png" //img source
      let uvIndex = "UV Index is " + response.daily[0].uvi; //writing a conditional statement uv index chart ex. if UV index <>, then add class..//


      ///DAY ONE

      for (let index = 0; index < 1; index++) {
        let todayWeather = document.createElement("div");
        let dateEl = document.createElement("h3");
        let tempEl = document.createElement("p");
        let windEl = document.createElement("p");
        let humidEl = document.createElement("p");
        let uvInd = document.createElement("p");
      
        const dateElement1 = new Date(dateStamp * 1000);



        todayWeather.appendChild(dateEl);
        todayWeather.appendChild(tempEl);
        todayWeather.appendChild(windEl);
        todayWeather.appendChild(humidEl);
        todayWeather.appendChild(uvInd);
  
        dateEl.textContent = dateElement1;
        tempEl.textContent = temp;
        windEl.textContent = wind;
        humidEl.textContent = humidity;
        uvInd.textContent = uvIndex;
        showCityName.textContent = "Today's weather in: " + city;
  
        todayBox.appendChild(todayWeather);



           ///DAY TWO


    for (let index = 1; index < 2; index++) {
      let oneDay = document.createElement("div");
      let dateEl = document.createElement("h3");
      let tempEl = document.createElement("p");
      let windEl = document.createElement("p");
      let humidEl = document.createElement("p");

      let temp = response.daily[1].temp.day + " Fahrenheit"; 
      let wind = response.daily[1].wind_speed + " Test MPH"; 
      let humidity = "Humidity is " + response.daily[1].humidity + "%"; 
      let dateStamp = response.daily[1].dt //date needs to be formatted, use Moment.unix

      const dateElement2 = new Date(dateStamp * 1000);

      oneDay.appendChild(dateEl);
      oneDay.appendChild(tempEl);
      oneDay.appendChild(windEl);
      oneDay.appendChild(humidEl);

      dateEl.textContent = dateElement2;
      tempEl.textContent = temp;
      windEl.textContent = wind;
      humidEl.textContent = humidity;

      dayOneBox.appendChild(oneDay);
    }



     ///DAY THREE


      for (let index = 2; index < 3; index++) {
      let twoDay = document.createElement("div");
      let dateEl = document.createElement("h3");
      let tempEl2 = document.createElement("p");
      let windEl2 = document.createElement("p");
      let humidEl2 = document.createElement("p");

      let temp2 = response.daily[2].temp.day + " Fahrenheit"; 
      let wind2 = response.daily[2].wind_speed + " MPH"; 
      let humidity2 = "Humidity is " + response.daily[2].humidity + "%"; 
      let dateStamp = response.daily[2].dt //date needs to be formatted, use Moment.unix

      const dateElement3 = new Date(dateStamp * 1000);

      dayTwoBox.appendChild(dateEl);
      dayTwoBox.appendChild(tempEl2);
      dayTwoBox.appendChild(windEl2);
      dayTwoBox.appendChild(humidEl2);

      dateEl.textContent = dateElement3;
      tempEl2.textContent = temp2;
      windEl2.textContent = wind2;
      humidEl2.textContent = humidity2;

      dayTwoBox.appendChild(twoDay);


      //DAY FOUR

      for (let index = 3; index < 4; index++) {
        let threeDay = document.createElement("div");
        let dateEl = document.createElement("h3");
        let tempEl3 = document.createElement("p");
        let windEl3 = document.createElement("p");
        let humidEl3 = document.createElement("p");
  
        let temp3 = response.daily[3].temp.day + " Fahrenheit"; 
        let wind3 = response.daily[3].wind_speed + " MPH"; 
        let humidity3 = "Humidity is " + response.daily[3].humidity + "%"; 
        let dateStamp= response.daily[3].dt //date needs to be formatted, use Moment.unix

        const dateElement4 = new Date(dateStamp * 1000);

        dayThreeBox.appendChild(dateEl);
        dayThreeBox.appendChild(tempEl3);
        dayThreeBox.appendChild(windEl3);
        dayThreeBox.appendChild(humidEl3);
  
        dateEl.textContent = dateElement4;
        tempEl3.textContent = temp3;
        windEl3.textContent = wind3;
        humidEl3.textContent = humidity3;
  
        dayThreeBox.appendChild(threeDay);
    }


     //DAY FIVE

    
    for (let index = 4; index < 5; index++) {
      let fourDay = document.createElement("div");
      let dateEl = document.createElement("h3");
      let tempEl4 = document.createElement("p");
      let windEl4 = document.createElement("p");
      let humidEl4 = document.createElement("p");

      let temp4 = response.daily[4].temp.day + " Fahrenheit"; 
      let wind4 = response.daily[4].wind_speed + " MPH"; 
      let humidity4 = "Humidity is " + response.daily[4].humidity + "%"; 
      let dateStamp= response.daily[4].dt; 

      const dateElement5 = new Date(dateStamp * 1000);

      dayFourBox.appendChild(dateEl);
      dayFourBox.appendChild(tempEl4);
      dayFourBox.appendChild(windEl4);
      dayFourBox.appendChild(humidEl4);

      dateEl.textContent = dateElement5;
      tempEl4.textContent = temp4;
      windEl4.textContent = wind4;
      humidEl4.textContent = humidity4;

      dayFourBox.appendChild(fourDay);
  }


  //DAY SIX


  for (let index = 5; index < 6; index++) {
    let fiveDay = document.createElement("div");
    let dateEl = document.createElement("h3");
    let tempEl5 = document.createElement("p");
    let windEl5 = document.createElement("p");
    let humidEl5 = document.createElement("p");

    let temp5 = response.daily[5].temp.day + " Fahrenheit"; 
    let wind5 = response.daily[5].wind_speed + " MPH"; 
    let humidity5 = "Humidity is " + response.daily[5].humidity + "%"; 
    let dateStamp= response.daily[5].dt;

    const dateElement6 = new Date(dateStamp * 1000);

    dayFiveBox.appendChild(dateEl);
    dayFiveBox.appendChild(tempEl5);
    dayFiveBox.appendChild(windEl5);
    dayFiveBox.appendChild(humidEl5);

    dateEl.textContent = dateElement6;
    tempEl5.textContent = temp5;
    windEl5.textContent = wind5;
    humidEl5.textContent = humidity5;

    dayFiveBox.appendChild(fiveDay);
}   

    }}})})}
    