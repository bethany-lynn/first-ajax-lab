'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
 fetch('/fortune')
   .then((response) => response.json())
   .then((responseData) => {
      document.querySelector('#fortune-text').innerText = responseData;
   });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // const queryString = new URLSearchParams({zipcode}).toString();
  // const url = `/weather.json?${queryString}`;
  

  fetch(`${url}?zipcode=${zipcode}`)
  // variable on line 30 - the active url
    .then(response => response.json())
    // ^^ specifically used .json instead of .text 
    .then((jsonData) => {
      console.log(jsonData)
      document.querySelector('#weather-info').innerHTML = jsonData.forecast;
    });
    // ^^ jsonData.forecast is indexing into the correct value (. method will look for string as key)
    // dictionaries have to be returned as json, same with lists/arrays
  }

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  // ^^ key value pairs of string(melon_tupe and qty) and form input 
  // ^^ dict/obj being sent to server/python
  // request.json gets values
  
    fetch('/order-melons.json', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.code == 'ERROR'){
          document.querySelector('#order-status').classList.add('order-error');
        } else if (responseJson.code == 'OK') {
          document.querySelector('#order-status').classList.remove('order-error')
        }
        document.querySelector('#order-status').innerHTML = responseJson.msg;
      });
  // add .order-error class if result is ERROR
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);