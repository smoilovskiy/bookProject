'use strict';
import { offers } from './offersGen.js';
import { clonedCard } from './card.js';
import { setUiDisabled, setUiEnabled } from './form.js';
import { mapInit } from './map.js'


setUiDisabled();
addEventListener("click", setUiEnabled);
addEventListener("click", mapInit);


import { homePrice, inTime, outTime } from "./form.js";
console.log(homePrice, inTime, outTime);

console.log(offers[0]);
console.log(offers);