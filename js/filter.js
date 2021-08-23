import { getData } from "./server.js";
import { mapInit } from "./map.js";


let housingType = document.querySelector('#housing-type');
housingType.addEventListener("change", housingTypeFilter);

// debugger

export function housingTypeFilter(evt) {

  const typeHome = evt.target.value;

  switch (typeHome) {
    case "bungalow":
      filterByHousingType("bungalow");
      break;
    case "flat":
      filterByHousingType("flat");
      break;
    case "house":
      filterByHousingType("house");
      break;
    case "palace":
      filterByHousingType("palace");
      break;
  }

  var filteredArr = [];
  let serverAnswer = getData();
  
  function filterByHousingType(item) {
    item = item.offer.type;
    filteredArr = serverAnswer.filter(filterByHousingType);
    
    return filteredArr;
  }
  mapInit.createCommonMarkers(filteredArr);
}

