// var mymap = L.map('map-canvas').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);

// const L = window.L;
// const TOKYO_LATITUDE = 35.685257;
// const TOKYO_LONGITUDE = 139.75146;
// const MAP_ZOOM = 13;


// export const createMap = () => {
//   debugger;
//   const map = new L.map('map-canvas')
//     .setView({
//       lat: TOKYO_LATITUDE,
//       lng: TOKYO_LONGITUDE,
//     }, MAP_ZOOM);

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//     {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     },
//   ).addTo(map);
//   return map;
// };