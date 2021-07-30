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


var mainPin = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [80, 160],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

L.marker([LAT, LNG], {
  icon: mainPin,
  draggable: true,
  
}).addTo(map);

}