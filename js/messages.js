export function getSuccessMessage() {
  // const successMessage = document.querySelector('#success')
  // .content
  // .querySelector('.success');
  // const clonedMessage = successMessage.cloneNode(true);


  // let success = clonedMessage.querySelector('.success');
  // success.innerText = "Узбек";
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

}