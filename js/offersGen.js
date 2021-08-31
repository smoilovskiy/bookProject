'use strict';
import { getRandomInt, getRandomFloat } from './randomGen.js';
import {
  OBJECTS_COUNT, X_START, X_END, Y_START, Y_END, N_PICT_START, N_PICT_END, PRICE_MIN, PRICE_MAX, TYPE_INDEX_START,
  TYPE_INDEX_END, N_ROOMS_MIN, N_ROOMS_MAX, N_GUESTS_MIN, N_GUESTS_MAX, T_START, T_END, FEATURE_INDEX_START, FEATURE_INDEX_END,
  PHOTO_INDEX_START, PHOTO_INDEX_END, TITLES, TYPES, TIMES, FEATURES, DESCRIPTIONS, PHOTOS
} from './constants.js';

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