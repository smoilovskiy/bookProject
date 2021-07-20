function getRandomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFloat(min, max) {
  return (min + Math.random() * (max - min)).toFixed(5);
}


const objectsCount = 10; //number of generated objects
const xStart = 35.65000, xEnd = 35.70000; //longitude range
const yStart = 139.70000, yEnd = 139.80000; //latitude range
const nPictBegin = 1, nPictEnd = 8; //number in picture name for avatar
const priceMin = 50, priceMax = 200; //price range
const typeIndexStart = 0, typeIndexEnd = 3; //index of type in types array
const nRoomsMin = 1, nRoomsMax = 5; //number of rooms
const nGuestsMin = 1, nGuestsMax = 10; //number of guests
const tStart = 0, tEnd = 2; //index of time in times array
const featureIndexStart = 0, featureIndexEnd = 5; //index of feature in features array
const photoIndexStart = 0, photoIndexEnd = 2; //index of photo in photos array
const titles = ['заголовок1', 'заголовок2', 'заголовок3', 'заголовок4', 'заголовок5', 'заголовок6', 'заголовок7', 'заголовок8', 'заголовок9', 'заголовок10'];
const types = ['palace', 'flat', 'house', 'bungalow'];
const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = ['описание1', 'описание2', 'описание3', 'описание4', 'описание5', 'описание6', 'описание7', 'описание8', 'описание9', 'описание10'];
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var counter = 0;
var offers = new Array(objectsCount).fill().map(function () {
  const X = getRandomFloat(xStart, xEnd);
  const Y = getRandomFloat(yStart, yEnd);
  

  const offerObj = {
    location: {
      x: X,
      y: Y,
    },
    author: {
      avatar: `img/avatars/user0${getRandomInt(nPictBegin, nPictEnd)}.png`
    },
    offer: {
      title: titles[counter],
      address: {
        x: X,
        y: Y,
      },
      price: getRandomInt(priceMin, priceMax),
      type: types[getRandomInt(typeIndexStart, typeIndexEnd)],
      rooms: getRandomInt(nRoomsMin, nRoomsMax),
      guests: getRandomInt(nGuestsMin, nGuestsMax),
      checkin: times[getRandomInt(tStart, tEnd)],
      checkout: times[getRandomInt(tStart, tEnd)],
      features: features.splice(getRandomInt(featureIndexStart, featureIndexEnd), getRandomInt(featureIndexStart, featureIndexEnd)),
      description: descriptions[counter],
      photos: photos.splice(getRandomInt(photoIndexStart, photoIndexEnd), getRandomInt(photoIndexStart, photoIndexEnd)),
    }
  }
  counter++;
  return offerObj;
}
 );


console.log(offers);