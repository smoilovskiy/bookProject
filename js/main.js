'use strict';
import { offers } from './offersGen.js';
import { setUiDisabled, setUiEnabled } from './form.js';
import { mapInit } from './map.js';
import { checkTitle, checkPrice, checkRoominess } from './validation.js';
import { data } from './filter.js';

import { sendData, getData } from './server.js';
import { sendFormSuccess, sendFormError } from './constants.js';
import { displayErrorMessage, displaySuccessMessage } from './messages.js';

setUiDisabled();


var clickOnMap = document.querySelector('.map__canvas');
clickOnMap.addEventListener("click", setUiEnabled);
clickOnMap.addEventListener("click", mapInit, { once: true });


/* validation */
checkTitle();
checkPrice();
checkRoominess();

console.log(offers);