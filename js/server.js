import { mapInit } from "./map.js";

export async function getData() {

  let response = await fetch('https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    })
  let serverAnswer = await response.json()
  return serverAnswer;
}


// getData().then(function (serverAnswer) {
//   console.log(serverAnswer);
//   // return serverAnswer;

//   // createBlueMarkers(resp)

// })

