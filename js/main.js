'use strict';
import { offers } from './offersGen.js';
import { setUiDisabled, setUiEnabled } from './form.js';
import { mapInit } from './map.js';
import { checkTitle, checkPrice, checkRoominess } from './validation.js';


setUiDisabled();


var clickOnMap = document.querySelector('.map__canvas');
clickOnMap.addEventListener("click", setUiEnabled);
clickOnMap.addEventListener("click", mapInit, {once : true});

checkTitle();
checkPrice();
checkRoominess();

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // читаем ответ в формате JSON

// alert(commits[0].author.login);


let url = 'https://23.javascript.pages.academy/keksobooking/data';
let response = await fetch(url);

let json = await response.json();
alert("Вот: " + json[0]);

console.log(offers);