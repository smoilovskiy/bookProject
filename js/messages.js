export function displaySuccessMessage(successMessage) {

  let main = document.querySelector('main');
  let elem = document.createElement('div');
  let successTemplate = success.content.cloneNode(true);

  let newSuccessMessage = successTemplate.querySelector('.success__message');
  newSuccessMessage.innerText = successMessage;

  elem.append(successTemplate);
  main.append(elem);


}


export function displayErrorMessage(errorMessage) {

  let main = document.querySelector('main');
  let elem = document.createElement('div');
  let errorTemplate = error.content.cloneNode(true);

  let newErrorMessage = errorTemplate.querySelector('.error__message');
  newErrorMessage.innerText = errorMessage;

  elem.append(errorTemplate);
  main.append(elem);

}