import { offers } from "./offersGen.js";
import { getData } from "./server.js";
// import { createCommonMarkers } from "./map.js";
export const data = 1

// createOffer(serverAnswer[0]);
const formFilter = document.querySelector('.map__filters');
formFilter.addEventListener("change", (evt) => {

  getData()
    .then(function (serverAnswer) {
      console.log(serverAnswer);
      mapFilters(serverAnswer);

      let commonMarkers = document.querySelectorAll('.leaflet-marker-icon[src="./img/pin.svg"]')
      console.log(commonMarkers);
      for (let i = 0; i < commonMarkers.length; i++) {
        commonMarkers[i].remove();
      }
      


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
    return offer.offer.type === housingType.value;
  }

  function filterByHousingPrice(offer) {
    // debugger

    if (housingPrice.value === "low") {
      return offer.offer.price < 10000
    }
    if (housingPrice.value === "middle") {
      return offer.offer.price >= 10000 && offer.offer.price <= 50000
    }
    if (housingPrice.value === "high") {
      return offer.offer.price > 50000
    }
    if (housingPrice.value === "any") {
      return true
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
  console.log(filteredArr);

//  createCommonMarkers(filteredArr);

  // function createCommonMarkers(serverAnswer) {
  //   const LAT = 35.68525;
  //   const LNG = 139.75146;
  //   const mapZoom = 10;
  //   const mapOptions = {
  //     center: [LAT, LNG],
  //     zoom: mapZoom
  //   }
  //   const map = L.map("map-canvas", mapOptions);
  //   const layer = L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  //   map.addLayer(layer);

  //   for (let i = 0; i < serverAnswer.length; i++) {
  //     let coordX = serverAnswer[i].location.lat;
  //     let coordY = serverAnswer[i].location.lng;
  //     createPins(coordX, coordY, serverAnswer[i]);
  //     // console.log(serverAnswer[i]);
  //   }

  //   function createPins(lat, lng, offer) {
  //     const commonPin = L.icon({
  //       iconUrl: './img/pin.svg',
  //       iconSize: [50, 50],
  //     });

  //     const commonMarker = L.marker([lat, lng], {
  //       icon: commonPin,
  //     })
  //     let markUpCard = createOffer(offer);
  //     commonMarker.bindPopup(markUpCard).openPopup();
  //     commonMarker.addTo(map);
  //     return serverAnswer;

  //   }

  // }
}






// import { mapInit } from "./map.js";


// let housingType = document.querySelector('#housing-type');
// housingType.addEventListener("change", housingTypeFilter);

// // debugger

// export function housingTypeFilter(evt) {

  // const typeHome = evt.target.value;

  // switch (typeHome) {
  //   case "bungalow":
  //     filterByHousingType("bungalow");
  //     break;
  //   case "flat":
  //     filterByHousingType("flat");
  //     break;
  //   case "house":
  //     filterByHousingType("house");
  //     break;
  //   case "palace":
  //     filterByHousingType("palace");
  //     break;
  // }

  // var filteredArr = [];
  // let serverAnswer = getData();

  // function filterByHousingType(item) {
  //   item = item.offer.type;
  //   filteredArr = serverAnswer.filter(filterByHousingType);

  //   return filteredArr;
  // }
  // mapInit.createCommonMarkers(filteredArr);
// }

