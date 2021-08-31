import { offers } from "./offersGen.js";
import { getData } from "./server.js";
import { createOffer } from "./card.js";



  const formAddress = document.getElementById("address");
  const LAT = 35.68525;
  const LNG = 139.75146;
  const mapZoom = 13;


  const mapOptions = {
    center: [LAT, LNG],
    zoom: mapZoom
  }
  const map = new L.map("map-canvas", mapOptions);
  const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");


  export function mapInit() {

  map.addLayer(layer);
  const mainPin = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [80, 160],
  });

  const mainMarker = L.marker([LAT, LNG], {
    icon: mainPin,
    draggable: true,

  }).addTo(map);

  formAddress.value = [LAT + "  " + LNG];

  mainMarker.on("drag", newAddressMarker);

  function newAddressMarker() {
    let coordX = mainMarker.getLatLng().lat.toFixed(5);
    let coordY = mainMarker.getLatLng().lng.toFixed(5);
    formAddress.value = coordX + " " + coordY;
  };


  getData().then(function (serverAnswer) {
    console.log(serverAnswer);
    createCommonMarkers(serverAnswer);
  })
}

export function createCommonMarkers(serverAnswer) {

  for (let i = 0; i < serverAnswer.length; i++) {
    let coordX = serverAnswer[i].location.lat;
    let coordY = serverAnswer[i].location.lng;
    createPins(coordX, coordY, serverAnswer[i]);
  }

  function createPins(lat, lng, offer) {
    const commonPin = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [50, 50],
    });

    const commonMarker = L.marker([lat, lng], {
      icon: commonPin,
    })
    let markUpCard = createOffer(offer);
    commonMarker.bindPopup(markUpCard).openPopup();
    commonMarker.addTo(map);
  }
}