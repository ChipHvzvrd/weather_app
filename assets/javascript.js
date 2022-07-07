var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

function locationApi(){

  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=190273917e2fc4166132adb9a1518353')
    .then(response => response.json())
    //.then(data =>console.log(data))
    .then(data => {
        var nameValue = data['city']['name'];

        cityName.innerHTML = nameValue;

    })

    //.catch(err => alert('Incorrect user input...'))
}


button.addEventListener('click', locationApi)

