'use strict';
//let form = document.querySelector(".ad-form__element");

let typeHome = document.querySelector("#type");
let formPrice = document.querySelector("#price");

export function setUiDisabled() {

  function setMapFiltersDisable() {
    let selectContainer = document.querySelector('.map__filters');
    let allSelect = selectContainer.querySelectorAll('select');
    for (let i = 0; i < allSelect.length; i++) {
      allSelect[i].disabled = true;
    }

    let featuresInputsMap = selectContainer.querySelectorAll('input');
    for (let i = 0; i < featuresInputsMap.length; i++) {
      featuresInputsMap[i].disabled = true;
    }
  }

  function setFormDisable() {
    let formContainer = document.querySelector('.ad-form');
    let selectInputs = formContainer.querySelectorAll('select');
    for (let i = 0; i < selectInputs.length; i++) {
      selectInputs[i].disabled = true;
    }

    let inputs = formContainer.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }

    let textareas = formContainer.querySelector('textarea');
    textareas.disabled = true;

    let featuresForm = formContainer.querySelectorAll('input');
    for (let i = 0; i < featuresForm.length; i++) {
      featuresForm[i].disabled = true;
    }

    let submitButton = formContainer.querySelector('button');
    submitButton.disabled = true;
  }

  setMapFiltersDisable();
  setFormDisable();

}

export function setUiEnabled() {

  function setMapFiltersEnable() {
    let selectContainer = document.querySelector('.map__filters');
    let allSelect = selectContainer.querySelectorAll('select');
    for (let i = 0; i < allSelect.length; i++) {
      allSelect[i].disabled = false;
    }

    let featuresInputsMap = selectContainer.querySelectorAll('input');
    for (let i = 0; i < featuresInputsMap.length; i++) {
      featuresInputsMap[i].disabled = false;
    }
  }

  function setFormEnable() {
    let formContainer = document.querySelector('.ad-form');
    let selectInputs = formContainer.querySelectorAll('select');
    for (let i = 0; i < selectInputs.length; i++) {
      selectInputs[i].disabled = false;
    }

    let inputs = formContainer.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }

    let textareas = formContainer.querySelector('textarea');
    textareas.disabled = false;

    let featuresForm = formContainer.querySelectorAll('input');
    for (let i = 0; i < featuresForm.length; i++) {
      featuresForm[i].disabled = false;
    }

    let submitButton = formContainer.querySelector('button');
    submitButton.disabled = false;
  }

  setMapFiltersEnable();
  setFormEnable();

}


typeHome.addEventListener("change", homePrice)

export function homePrice(evt) {

  const typeHome = evt.target.value;
  formPrice.value = "";
  let count = null;

  switch (typeHome) {
    case "bungalow":
      count = "0";
      break;
    case "flat":
      count = "1500";
      break;
    case "house":
      count = "5000";
      break;
    case "palace":
      count = "10000";
      break;
  }

  formPrice.setAttribute("placeholder", count)
  formPrice.min = count;
}

//let formEl = document.querySelector(".ad-form__element--time");

let timeIn = document.querySelector('#timein');
let timeOut = document.querySelector('#timeout');

timeIn.addEventListener("change", inTime);
timeOut.addEventListener("change", outTime);


export function inTime(evt) {
  const timeIn = evt.target.value;
  let count = null;
  switch (timeIn) {
    case "12:00":
      count = "12:00";
      break;
    case "13:00":
      count = "13:00";
      break;
    case "14:00":
      count = "14:00";
      break;
  }
  timeOut.value = count;
}


export function outTime(evt) {
  const timeOut = evt.target.value;
  let cc = null;
  switch (timeOut) {
    case "12:00":
      cc = "12:00";
      break;
    case "13:00":
      cc = "13:00";
      break;
    case "14:00":
      cc = "14:00";
      break;
  }
  timeIn.value = cc;
}