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
        var nameValue = data['city']['name'] + ', '+ data['city']['country'];
        var tempValueOne = data['list'][0]['main']['temp']  + '&#176;' + '<br>' + data['list'][0]['weather'][0]['description'] + '<br>' + data['list'][0]['weather'][0]['icon'];
        var tempValueTwo = data['list'][1]['main']['temp']  + '&#176;' + '<br>' + data['list'][1]['weather'][0]['description'] + '<br>' + data['list'][0]['weather'][0]['icon'];
        var tempValueThree = data['list'][2]['main']['temp']  + '&#176;' + '<br>' + data['list'][2]['weather'][0]['description'] + '<br>' + data['list'][0]['weather'][0]['icon'];
        var tempValueFour = data['list'][3]['main']['temp']  + '&#176;' + '<br>' + data['list'][3]['weather'][0]['description'] + '<br>' + data['list'][0]['weather'][0]['icon'];
        var tempValueFive = data['list'][4]['main']['temp']  + '&#176;' + '<br>' + data['list'][4]['weather'][0]['description'] + '<br>' + data['list'][0]['weather'][0]['icon'];

        cityName.innerHTML = nameValue;
        dayOneTemp.innerHTML = tempValueOne;
        dayTwoTemp.innerHTML = tempValueTwo  + '&#176;';
        dayThreeTemp.innerHTML = tempValueThree  + '&#176;';
        dayFourTemp.innerHTML = tempValueFour  + '&#176;';
        dayFiveTemp.innerHTML = tempValueFive  + '&#176;';

    })

    //.catch(err => alert('Incorrect user input...'))
}


button.addEventListener('click', locationApi)

