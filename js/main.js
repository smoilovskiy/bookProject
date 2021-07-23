import { offers } from './offersGen.js';

const firstOffer = offers[0]; 

const card = document.querySelector('#card')
  .content
  .querySelector('.popup');
  const clonedCard = card.cloneNode(true);

let title = clonedCard.querySelector('.popup__title');
title.innerText = firstOffer.offer.title;

let address = clonedCard.querySelector('.popup__text--address');
let longitude = firstOffer.offer.address.x;
let latitude = firstOffer.offer.address.y;
address.innerText = 'Адрес: ' + longitude + ' ' + latitude;

let price = clonedCard.querySelector('.popup__text--price');
price.innerText = firstOffer.offer.price + '$ / ночь';








let map = document.querySelector('.map__canvas');
map.append(clonedCard);


console.log(offers[0]);
console.log(offers);