export function getSuccessMessage() {

  let main = document.querySelector('main');
  let fragment = document.createDocumentFragment();
  let successTemplate = document.querySelector('#success')
    .content.querySelector('.success').cloneNode(true);

  fragment.appendChild(successTemplate);
  main.appendChild(fragment);
}


export function getErrorMessage(errorMessage) {
  console.log(errorMessage);

  let main = document.querySelector('main');
  let fragment = document.createDocumentFragment();
  let errorTemplate = document.querySelector('#error')
    .content.querySelector('.error').cloneNode(true);

  let newErrorMessage = errorTemplate.querySelector('.error__message');
  newErrorMessage.innerText = errorMessage;


  fragment.appendChild(errorTemplate);
  main.appendChild(fragment);

  // onButtonErrorClick();
  // document.addEventListener('keydown', onEscapeErrorClick);

  // function onEscapeErrorClick(evt) {
  //   if (window.utils.isEscapeEvt(evt)) {
  //     removeErrorPopup();
  //   }
  // }

  // function removeErrorPopup() {
  //   let popup = document.querySelector('.error');
  //   document.removeEventListener('keydown', onEscapeErrorClick);
  //   // window.map.dectivateInterface();
  //   popup.remove();
  // }

  // function onButtonErrorClick() {
  //   let button = document.querySelector('.error').querySelector('.error__button');
  //   button.addEventListener('click', function (evtClick) {
  //     evtClick.preventDefault();
  //     removeErrorPopup();
  //   });
  // };
}