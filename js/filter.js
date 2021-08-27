import { offers } from "./offersGen.js";
import { getData } from "./server.js";
import { createCommonMarkers } from "./map.js";
export const data = 1

// createOffer(serverAnswer[0]);
const formFilter = document.querySelector('.map__filters');



formFilter.addEventListener("change", (evt) => {

  getData()
    .then(function (serverAnswer) {
      // console.log(serverAnswer);
      mapFilters(serverAnswer);






    });
});


console.log(data);

function mapFilters(serverAnswer) {
  // debugger

  console.log(serverAnswer);

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


  // console.log(housingType.value);
  // console.log(housingPrice.value);
  // console.log(housingRooms.value);
  // console.log(housingGuests.value);
  // console.log(filterFeatures);

  function filterByHousingType(offer) {
    // debugger
    if (housingType.value === "any") {
      return true;
    }
    return offer.offer.type === housingType.value;
  }

  function filterByHousingPrice(offer) {
    // debugger

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

  // function filterByFeature(offer) {

  //   console.log(offer);
  //   let filtered = true;
  //   if (Boolean(offer.offer.features) && tempArr.length > 0) {

  //     tempArr.forEach(function (elem) {
  //       if (!offer.offer.features.includes(elem)) {
  //         filtered = false;

  //       }
  //     })
  //   }
  //     console.log(filtered);
  //     return filtered;
  // }

  function filterByFeature(offer) {
    if (tempArr.length === 0 ) {
      return true;
    }
    console.log(offer);

    let filtered = false;

    if (Boolean(offer.offer.features) && tempArr.length > 0) {


      for (let i = 0; i < tempArr.length; i++) {
        if (offer.offer.features.includes(tempArr[i])) {
          filtered = true;
        } 
      }
    }

    console.log(filtered);
    return filtered;
  }


  let commonFilter = function (elem) {

    return filterByHousingType(elem) && filterByHousingPrice(elem) && filterByHousingRooms(elem) && filterByHousingGuests(elem) && filterByFeature(elem);
  }


  //  filteredArr = serverAnswer.filter(commonFilter);

  // filterByHousingType(elem) && filterByHousingPrice(elem) && filterByHousingRooms(elem) && housingGuestsHandler(elem) && filterByHousingGuests(elem)

  let filteredArr = serverAnswer.filter(commonFilter);
  //  debugger
  let commonMarkers = document.querySelectorAll('.leaflet-marker-icon[src="./img/pin.svg"]')
  // console.log(commonMarkers);
  for (let i = 0; i < commonMarkers.length; i++) {
    commonMarkers[i].remove();
  }
  createCommonMarkers(filteredArr);

  console.log(filteredArr);

  // let featuresFilter = function (elem) {

  //   const filterFeaturesCheckboxes = document.querySelectorAll('.map__features input[type=checkbox]:checked');

  //   let filtered = true;
  //   if (filterFeaturesCheckboxes.length && elem.offer.features) {

  //     filterFeaturesCheckboxes.forEach(function (chBox) {
  //       if (!elem.offer.features.includes(chBox.value)) {
  //         filtered = false;
  //       }
  //     });
  //   }
  //   return filtered;
  // };


}