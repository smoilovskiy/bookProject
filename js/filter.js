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
    if (housingType.value === "any") return true;
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
    return offer.offer.rooms === housingRooms.value;
  }

  function filterByHousingGuests(offer) {
    console.log("guests " + housingGuests.value);
    return offer.offer.guests === housingGuests.value;
  }

  let filteredArr = serverAnswer.filter(filterByHousingPrice); // filterByHousingType && filterByHousingPrice && filterByHousingRooms && filterByHousingGuests
  //  debugger
  let commonMarkers = document.querySelectorAll('.leaflet-marker-icon[src="./img/pin.svg"]')
  // console.log(commonMarkers);
  for (let i = 0; i < commonMarkers.length; i++) {
    commonMarkers[i].remove();
  }
  createCommonMarkers(filteredArr);

  console.log(filteredArr);

}