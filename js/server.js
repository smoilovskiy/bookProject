import { mapInit } from "./map.js";
import { getSuccessMessage, getErrorMessage } from './messages.js';
import { sendFormSuccess, sendFormError } from './constants.js';

const dataForm = document.querySelector('.ad-form');
const resetBtn = document.querySelector('.ad-form__reset');
const main = document.querySelector('main');


export async function getData() {

  let response = await fetch('https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    })


  let serverAnswer = await response.json();

  return serverAnswer;
}





dataForm.addEventListener('submit', sendData);

export async function sendData(e) {
   e.preventDefault();

   const formData  = new FormData(dataForm); 

  let responce = await fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData
  });

      getSuccessMessage(sendFormError);
      dataForm.reset();
      


}

resetBtn.addEventListener("click", () => {
  dataForm.reset();
})