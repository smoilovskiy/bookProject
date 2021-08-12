'use strict';
export const OBJECTS_COUNT = 10; //number of generated objects
export const X_START = 35.65000, X_END = 35.70000; //longitude range
export const Y_START = 139.70000, Y_END = 139.80000; //latitude range
export const N_PICT_START = 1, N_PICT_END = 8; //number in picture name for avatar
export const PRICE_MIN = 50, PRICE_MAX = 200; //price range
export const TYPE_INDEX_START = 0, TYPE_INDEX_END = 3; //index of type in types array
export const N_ROOMS_MIN = 1, N_ROOMS_MAX = 5; //number of rooms
export const N_GUESTS_MIN = 1, N_GUESTS_MAX = 10; //number of guests
export const T_START = 0, T_END = 2; //index of time in times array
export const FEATURE_INDEX_START = 0, FEATURE_INDEX_END = 5; //index of feature in features array
export const PHOTO_INDEX_START = 0, PHOTO_INDEX_END = 2; //index of photo in photos array
export const VISITOR_INDEX_START = 0, VISITOR_INDEX_END = 3; //index of visitor in visitors array
export const TITLES = ['Жильё №1', 'Жильё №2', 'Жильё №3', 'Жильё №4', 'Жильё №5', 'Жильё №6', 'Жильё №7', 'Жильё №8', 'Жильё №9', 'Жильё №10'];
export const TYPES = ['palace', 'flat', 'house', 'bungalow'];
export const TIMES = ['12:00', '13:00', '14:00'];
export const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
export const DESCRIPTIONS = ['Описание жилья №1', 'Описание жилья №2', 'Описание жилья №3', 'Описание жилья №4', 'Описание жилья №5', 'Описание жилья №6', 'Описание жилья №7', 'Описание жилья №8', 'Описание жилья №9', 'Описание жилья №10'];
export const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
export const VISITORS = ['Вася', 'Коля', 'Петя', 'Люда'];
export const sendFormSuccess = 'Ваше объявление<br>успешно размещено!';
export const sendFormError = 'Ошибка размещения объявления';