function getRandomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFloat(min, max) {
  return (min + Math.random() * (max - min)).toFixed(5);
}


const titles = ['заголовок1', 'заголовок2', 'заголовок3', 'заголовок4', 'заголовок5', 'заголовок6', 'заголовок7', 'заголовок8', 'заголовок9', 'заголовок10'];
const types = ['palace', 'flat', 'house', 'bungalow'];
const times = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptions = ['описание1', 'описание2', 'описание3', 'описание4', 'описание5', 'описание6', 'описание7', 'описание8', 'описание9', 'описание10']; 
const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var offers = new Array(10).fill().map(u => ({
  location: {
    x: getRandomFloat(35.65000, 35.70000),
    y: getRandomFloat(139.70000, 139.80000),
  },
  author: {
    avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`
  },
  offer: {
    title: titles[0],
    address: {
      x: location.x,
      y: location.y
    },
    price: getRandomInt(50, 200),
    type: types[getRandomInt(0, 3)],
    rooms: getRandomInt(1, 5),
    guests: getRandomInt(1, 10),
    checkin: times[getRandomInt(0, 2)],
    checkout: times[getRandomInt(0, 2)],
    features: features.splice(getRandomInt(0, 5), getRandomInt(0, 5)),
    description: descriptions[0],
    photos: photos.splice(getRandomInt(0, 2), getRandomInt(0, 2)),
  },
}
));


console.log(offers);