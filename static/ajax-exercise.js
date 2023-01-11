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
  // console.log(queryString);

  // const url = `/weather.json?${queryString}`;
  // console.log(url);
  //url returns /weather.json?zipcode=94110

  const forecast = `${url}?zipcode=${zipcode}`;
  console.log(forecast);
  //forecast returns /weather.json?zipcode=94110

  fetch(url)
    .then(response => response.text())
    .then((status) => {
      document.querySelector('#weather-info').innerHTML = status;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
