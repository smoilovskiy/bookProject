'use strict';
import { offers } from './offersGen.js';
import { getData } from "./server.js";

getData()
.then(function (serverAnswer) {
  createOffer(serverAnswer[0]);
})
.catch(function() {
  alert('Get data error from server');
});


export function createOffer(firstOffer) {

  const card = document.querySelector('#card')
    .content
    .querySelector('.popup');
  const clonedCard = card.cloneNode(true);

  let title = clonedCard.querySelector('.popup__title');
  title.innerText = firstOffer.offer.title;

  let address = clonedCard.querySelector('.popup__text--address');
  address.innerText = 'Адрес: ' + firstOffer.offer.address;

  let price = clonedCard.querySelector('.popup__text--price');
  price.innerText = firstOffer.offer.price + '₽ / ночь';

  let type = clonedCard.querySelector('.popup__type');
  let select = firstOffer.offer.type;
  switch (select) {
    case 'flat':
      type.innerText = 'Квартира';
      break;
    case 'palace':
      type.innerText = 'Дворец';
      break;
    case 'house':
      type.innerText = 'Дом';
      break;
    case 'bungalow':
      type.innerText = 'Бунгало';
      break;
  }

  let capacity = clonedCard.querySelector('.popup__text--capacity');
  let rooms = firstOffer.offer.rooms;
  let guests = firstOffer.offer.guests;
  capacity.innerText = rooms + ' комнаты для ' + guests + ' гостей';

  let time = clonedCard.querySelector('.popup__text--time');
  let checkin = firstOffer.offer.checkin;
  let checkout = firstOffer.offer.checkout;
  time.innerText = 'Заезд после ' + checkin + ', выезд до ' + checkout;

  let features = clonedCard.querySelector('.popup__features');

  if (typeof firstOffer.offer['features'] !== "undefined") {

    // if (firstOffer.offer['features'].length > 0) {
    let newFeatures = firstOffer.offer.features.map(feature => {
      return `<li class = "popup__feature popup__feature--${feature}">`
    })
    features.innerHTML = newFeatures;
    // }
  }

  let description = clonedCard.querySelector('.popup__description');
  description.innerText = firstOffer.offer.description;


  if (typeof firstOffer.offer['photos'] !== "undefined" && firstOffer.offer.photos.length > 0) {

    let photos = clonedCard.querySelector('.popup__photos');
    let newPhotos = firstOffer.offer.photos.map(photo => {
      return `<img src='${photo}' width="45" height="40" >`
    }).join('');
    photos.innerHTML = newPhotos;

  }


  let avatar = clonedCard.querySelector('.popup__avatar');
  let srcAvatar = firstOffer.author.avatar;
  avatar.src = srcAvatar;

  // let popAvatar = clonedCard.querySelector(".popup__avatar");
  // let srcAvatar = offerDate['author'].avatar;
  // popAvatar.innerText = srcAvatar;

  // let article = clonedCard.querySelector('.popup');
  // let p = document.createElement('p');
  // clonedCard.append(p);
  // let newVisitors = firstOffer.offer.visitors.map(visitor => 
  //   {
  //    return ` ${visitor}`;
  //   })

  // p.innerText = "Гости:" + newVisitors;


  return clonedCard;
}