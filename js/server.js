const dataForm = document.querySelector('.ad-form');
const resetBttn = document.querySelector('.ad-form__reset');
const main = document.querySelector('main');


export async function getData() {

  let response = await fetch('https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    })


  let serverAnswer = await response.json();

  return serverAnswer;
}



dataForm.addEventListener('submit', sendData);

export async function sendData(e) {
  e.preventDefault();

  const formData = new FormData(dataForm);

  let responce = await fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData
  });

  function action(response) {

    console.log(response.status);

    if (response.status === 200) {
      let elem = document.createElement('div');
      let clone = success.content.cloneNode(true);
      elem.append(clone);
      main.append(elem);

      dataForm.reset();

      window.addEventListener('click', templateClick);
      window.addEventListener('keydown', templateKey);

      function templateClick(evt) {

        if (evt.target.className === 'success') {
          elem.style.display = 'none';
          document.location.reload();
        }
      }

      function templateKey(ev) {
        if (ev.keyCode == 27) {
          elem.style.display = 'none';
          document.location.reload();
        }
      }


    } else {

      let elem = document.createElement('div');
      let clone = error.content.cloneNode(true);
      elem.append(clone);
      main.append(elem);

      window.addEventListener('keydown', templateKey);

      function templateKey(evt) {
        if (evt.keyCode == 27) {
          elem.style.display = 'none';
        }
      }
    }
  }
  action(responce);

}

resetBttn.addEventListener('click', () => {
  dataForm.reset()
})