import { offers } from "./offersGen.js";
import { createOffer } from "./card.js";

export function mapInit() {

  const LAT = 35.685257;
  const LNG = 139.75146;
  const mapZoom = 10


  const mapOptions = {
    center: [LAT, LNG],
    zoom: mapZoom
  }
  const map = new L.map("map-canvas", mapOptions);
  const layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  map.addLayer(layer);


  const mainPin = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [80, 160],
  });

  const mainMarker = L.marker([LAT, LNG], {
    icon: mainPin,
    draggable: true,

  }).addTo(map);


  for (let i = 0; i < offers.length; i++) {
    let coordX = offers[i].location.x;
    let coordY = offers[i].location.y;
    createPins(coordX, coordY, offers[i]);
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