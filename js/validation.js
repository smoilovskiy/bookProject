'use strict';
export function checkTitle() {
  let title = document.querySelector('#title');
  title.setAttribute("minlength", "30");
  title.setAttribute("maxlength", "100");
}

export function checkPrice() {
  let price = document.querySelector('#price');
  price.setAttribute("max", "1000000");
}

export function checkRoominess() {
  let roomNumber = document.querySelector('#room_number');
  let capacity = document.querySelector('#capacity');

  roomNumber.addEventListener("change", numberRooms);

  function clearDisabled() {
    for (let i = 0; i < capacity.length; i++) {
      capacity[i].removeAttribute("disabled");
    }
  }


  function numberRooms(evt) {
    const roomNumber = evt.target.value;

    let guests = null;

    switch (roomNumber) {
      case "1":
        clearDisabled();
        guests = "1";
        capacity[0].setAttribute("disabled", true);
        capacity[1].setAttribute("disabled", true);
        capacity[3].setAttribute("disabled", true);

        break;
      case "2":
        clearDisabled();
        guests = "2";
        capacity[0].setAttribute("disabled", true);
        capacity[3].setAttribute("disabled", true);

        break;
      case "3":
        clearDisabled();
        guests = "3";
        capacity[3].setAttribute("disabled", true);

        break;
      case "100":
        clearDisabled();
        guests = "0";
        capacity[0].setAttribute("disabled", true);
        capacity[1].setAttribute("disabled", true);
        capacity[2].setAttribute("disabled", true);
        break;
    }
    capacity.value = guests;
  }
}