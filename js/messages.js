export function getSuccessMessage(successMessage) {

  let main = document.querySelector('main');
  let elem = document.createElement('div');
  let successTemplate = success.content.cloneNode(true);

  let newSuccessMessage = successTemplate.querySelector('.success__message');
  newSuccessMessage.innerText = successMessage;

  elem.append(successTemplate);
  main.append(elem);


}


export function getErrorMessage(errorMessage) {

  let main = document.querySelector('main');
  let elem = document.createElement('div');
  let errorTemplate = error.content.cloneNode(true);

  let newErrorMessage = errorTemplate.querySelector('.error__message');
  newErrorMessage.innerText = errorMessage;

  elem.append(errorTemplate);
  main.append(elem);


  // let fragment = document.createDocumentFragment();
  // let errorTemplate = document.querySelector('#error')
  //   .content.querySelector('.error').cloneNode(true);




  // fragment.appendChild(errorTemplate);
  // main.appendChild(fragment);

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