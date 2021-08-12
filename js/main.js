'use strict';
import { offers } from './offersGen.js';
import { setUiDisabled, setUiEnabled } from './form.js';
import { mapInit } from './map.js';
import { checkTitle, checkPrice, checkRoominess } from './validation.js';
import { sendData } from './server.js';
import { sendFormSuccess, sendFormError } from './constants.js';

setUiDisabled();


var clickOnMap = document.querySelector('.map__canvas');
clickOnMap.addEventListener("click", setUiEnabled);
clickOnMap.addEventListener("click", mapInit, { once: true });


/* validation */
checkTitle();
checkPrice();
checkRoominess();

var clickOnSubmit = document.querySelector('.ad-form__submit');
clickOnSubmit.addEventListener('click', sendData);


sendData()
.then(function (serverAnswer) {
  getSuccessMessage(sendFormSuccess);
  createOffer(serverAnswer[0]);
})
.catch(function (sendFormError) {
  getErrorMessage(sendFormError);
  let quitButton = document.querySelector('.error__button');
  quitButton.addEventListener('click', getData)
})



// let url = 'https://23.javascript.pages.academy/keksobooking/data';
// let response = await fetch(url);

// let json = await response.json();
// alert("Вот: " + json[0]);

console.log(offers);