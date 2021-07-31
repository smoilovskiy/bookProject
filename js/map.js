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

  const formAddress = document.getElementById("address");

  mainMarker.on("drag", newAddressMarker);

  function newAddressMarker() {
    let X = mainMarker.getLatLng().lat.toFixed(5);
    let Y = mainMarker.getLatLng().lng.toFixed(5);
      formAddress.value = X + " " + Y;
  };

  const commonPin = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [50, 50],
  });

  // const commonMarker = L.marker([LAT, LNG], {
  //   icon: commonPin,
  // }).addTo(map);


  let X = offerObj.location.lat
  let Y = offerObj.location.lng
  const commonMarker = L.marker([X, Y], { icon: commonPin });
  commonMarker.addTo(map).bindPopup(cloneCard(offerObj));



  // function onMapClick(e) {
  //   alert("You clicked the map at " + e.latlng);
  // }

  // map.on('click', onMapClick);

  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }

  map.on('click', onMapClick);

}