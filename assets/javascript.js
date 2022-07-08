var button = document.querySelector('#subButton');
var inputValue = document.querySelector('#inputValue');
var cityName = document.querySelector('#nameCity');
var desc = document.querySelector('#desc');
var dayOneTemp = document.querySelector('#temp-1');
var dayTwoTemp = document.querySelector('#temp-2');
var dayThreeTemp = document.querySelector('#temp-3');
var dayFourTemp = document.querySelector('#temp-4');
var dayFiveTemp = document.querySelector('#temp-5');

function locationApi(){

  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=imperial&appid=190273917e2fc4166132adb9a1518353')
    .then(response => response.json())
    //.then(data =>console.log(data))
    .then(data => {
        var nameValue = data['city']['name'] + ', '+ data['city']['country'] + '<br>' + data['cnt'];
        var tempValueOne = data['list'][0]['dt_txt'] + '<br>' + 'Temp:' + data['list'][0]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][0]['main']['humidity'] + '%';
        var tempValueTwo = data['list'][8]['dt_txt'] + '<br>' + 'Temp:' + data['list'][1]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][8]['main']['humidity'] + '%'; 
        var tempValueThree = data['list'][16]['dt_txt'] + '<br>' + 'Temp:' + data['list'][2]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][16]['main']['humidity'] + '%';
        var tempValueFour = data['list'][24]['dt_txt'] + '<br>' + 'Temp:' + data['list'][3]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][24]['main']['humidity'] + '%'; 
        var tempValueFive = data['list'][32]['dt_txt'] + '<br>' + 'Temp:' + data['list'][4]['main']['temp']  + '&#176;' + '<br>' + 'Humidity:' + data['list'][32]['main']['humidity'] + '%';

        cityName.innerHTML = nameValue;
        dayOneTemp.innerHTML = tempValueOne;
        dayTwoTemp.innerHTML = tempValueTwo;
        dayThreeTemp.innerHTML = tempValueThree;
        dayFourTemp.innerHTML = tempValueFour;
        dayFiveTemp.innerHTML = tempValueFive;

    })

    //.catch(err => alert('Incorrect user input...'))
}


button.addEventListener('click', locationApi)

