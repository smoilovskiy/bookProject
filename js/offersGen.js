import { getRandomInt } from './randomGen.js';
import { getRandomFloat } from './randomGen.js';

const OBJECTS_COUNT = 10; //number of generated objects
const X_START = 35.65000, X_END = 35.70000; //longitude range
const Y_START = 139.70000, Y_END = 139.80000; //latitude range
const N_PICT_START = 1, N_PICT_END = 8; //number in picture name for avatar
const PRICE_MIN = 50, PRICE_MAX = 200; //price range
const TYPE_INDEX_START = 0, TYPE_INDEX_END = 3; //index of type in types array
const N_ROOMS_MIN = 1, N_ROOMS_MAX = 5; //number of rooms
const N_GUESTS_MIN = 1, N_GUESTS_MAX = 10; //number of guests
const T_START = 0, T_END = 2; //index of time in times array
const FEATURE_INDEX_START = 0, FEATURE_INDEX_END = 5; //index of feature in features array
const PHOTO_INDEX_START = 0, PHOTO_INDEX_END = 2; //index of photo in photos array
const TITLES = ['заголовок1', 'заголовок2', 'заголовок3', 'заголовок4', 'заголовок5', 'заголовок6', 'заголовок7', 'заголовок8', 'заголовок9', 'заголовок10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['описание1', 'описание2', 'описание3', 'описание4', 'описание5', 'описание6', 'описание7', 'описание8', 'описание9', 'описание10'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var counter = 0;
export var offers = new Array(OBJECTS_COUNT).fill().map(function () {
  const X = getRandomFloat(X_START, X_END);
  const Y = getRandomFloat(Y_START, Y_END);


  const offerObj = {
    location: {
      x: X,
      y: Y,
    },
    author: {
      avatar: `img/avatars/user0${getRandomInt(N_PICT_START, N_PICT_END)}.png`
    },
    offer: {
      title: TITLES[counter],
      address: {
        x: X,
        y: Y,
      },
      price: getRandomInt(PRICE_MIN, PRICE_MAX),
      type: TYPES[getRandomInt(TYPE_INDEX_START, TYPE_INDEX_END)],
      rooms: getRandomInt(N_ROOMS_MIN, N_ROOMS_MAX),
      guests: getRandomInt(N_GUESTS_MIN, N_GUESTS_MAX),
      checkin: TIMES[getRandomInt(T_START, T_END)],
      checkout: TIMES[getRandomInt(T_START, T_END)],
      features: FEATURES.splice(getRandomInt(FEATURE_INDEX_START, FEATURE_INDEX_END), getRandomInt(FEATURE_INDEX_START, FEATURE_INDEX_END)),
      description: DESCRIPTIONS[counter],
      photos: PHOTOS.splice(getRandomInt(PHOTO_INDEX_START, PHOTO_INDEX_END), getRandomInt(PHOTO_INDEX_START, PHOTO_INDEX_END)),
    }
  }
  counter++;
  return offerObj;
}
);