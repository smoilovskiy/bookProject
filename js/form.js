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
    let features = document.querySelector('.map__features');
    features.disabled = true;
  }

  function setFormDisable() {
    let featuresContainer = document.querySelector('.ad-form');
    let featuresInputs = featuresContainer.querySelectorAll('fieldset');
    for (let i = 0; i < featuresInputs.length; i++) {
      featuresInputs[i].disabled = true;
    }
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
    let features = document.querySelector('.map__features');
    features.disabled = false;
  }

  function setFormEnable() {
    let featuresContainer = document.querySelector('.ad-form');
    let featuresInputs = featuresContainer.querySelectorAll('fieldset');
    for (let i = 0; i < featuresInputs.length; i++) {
      featuresInputs[i].disabled = false;
    }
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

let timeIn = document.getElementById("timein")
let timeOut = document.getElementById("timeout")

timeIn.addEventListener("change", inTime)
timeOut.addEventListener("change", outTime)


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