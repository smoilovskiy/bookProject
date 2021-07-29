'use strict';
import { offers } from './offersGen.js';
import { clonedCard } from './card.js';
import { setUiDisabled, setUiEnabled } from './form.js';



setUiDisabled();
addEventListener("click", setUiEnabled);


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


import { homePrice, inTime, outTime } from "./form.js";
console.log(homePrice, inTime, outTime);

console.log(offers[0]);
console.log(offers);