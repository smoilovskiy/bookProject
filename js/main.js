'use strict';
import { offers } from './offersGen.js';
import { setUiDisabled, setUiEnabled } from './form.js';
import { mapInit } from './map.js';
import { checkTitle, checkPrice } from './validation.js';


setUiDisabled();


var clickOnMap = document.querySelector('.map__canvas');
clickOnMap.addEventListener("click", setUiEnabled);
clickOnMap.addEventListener("click", mapInit, {once : true});

checkTitle();
checkPrice();



import { homePrice, inTime, outTime } from "./form.js";
console.log(homePrice, inTime, outTime);

console.log(offers[0]);
console.log(offers);