import { mapInit } from "./map.js";
import { getSuccessMessage, getErrorMessage } from './messages.js';

const allForm = document.querySelector('.ad-form');
const resetBtn = document.querySelector('.ad-form__reset');
const main = document.querySelector('main');

const sendFormError = 'Ошибка размещения объявления';
const sendFormSuccess = 'Ваше объявление<br>успешно размещено!';

export async function getData(errorMessage, success) {

  let response = await fetch('https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    })

  console.log(response.status);

  if (response.status >= 400) {
    getErrorMessage(errorMessage + ' ' + response.status);
  }

  let serverAnswer = await response.json();

  return serverAnswer;
}

