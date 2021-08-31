import { offers } from "./offersGen.js";
import { getData } from "./server.js";
import { createCommonMarkers } from "./map.js";
export const data = 1

const formFilter = document.querySelector('.map__filters');



formFilter.addEventListener("change", (evt) => {

  getData()
    .then(function (serverAnswer) {
      mapFilters(serverAnswer);
    });
});


console.log(data);

function mapFilters(serverAnswer) {

  let housingType = document.querySelector('#housing-type');
  let housingPrice = document.querySelector('#housing-price');
  let housingRooms = document.querySelector('#housing-rooms');
  let housingGuests = document.querySelector('#housing-guests');

  let tempArr = [];
  let filterFeatures = document.querySelectorAll('.map__checkbox[type="checkbox"]:checked');

  filterFeatures.forEach(function (currentValue) {

    tempArr.push(currentValue.value);

  })

  console.log(filterFeatures);
  console.log(tempArr);

  function filterByHousingType(offer) {
    if (housingType.value === "any") {
      return true;
    }
    return offer.offer.type === housingType.value;
  }

  function filterByHousingPrice(offer) {
    if (housingPrice.value === "low") {
      return offer.offer.price < 10000;
    }
    if (housingPrice.value === "middle") {
      return offer.offer.price >= 10000 && offer.offer.price <= 50000;
    }
    if (housingPrice.value === "high") {
      return offer.offer.price > 50000;
    }
    if (housingPrice.value === "any") {
      return true;
    }
  }

  function filterByHousingRooms(offer) {
    if (housingRooms.value === "any") {
      return true;
    }

    return offer.offer.rooms === +housingRooms.value;

  }

  function filterByHousingGuests(offer) {
    if (housingGuests.value === "any") {
      return true;
    }
    return offer.offer.guests === +housingGuests.value;
  }

  function filterByFeature(offer) {
    if (tempArr.length === 0) {
      return true;
    }

    let filtered = false;

    if (Boolean(offer.offer.features) && tempArr.length > 0) {

      for (let i = 0; i < tempArr.length; i++) {
        if (offer.offer.features.includes(tempArr[i])) {
          filtered = true;
        }
      }
    }

    return filtered;
  }


  let commonFilter = function (elem) {

    return filterByHousingType(elem) && filterByHousingPrice(elem) && filterByHousingRooms(elem) && filterByHousingGuests(elem) && filterByFeature(elem);
  }

  let filteredArr = serverAnswer.filter(commonFilter);
  let commonMarkers = document.querySelectorAll('.leaflet-marker-icon[src="./img/pin.svg"]')
  for (let i = 0; i < commonMarkers.length; i++) {
    commonMarkers[i].remove();
  }
  createCommonMarkers(filteredArr);
}