export function checkTitle() { 
let title = document.querySelector('#title');
title.setAttribute("minlength", "30");
title.setAttribute("maxlength", "100");
}

export function checkPrice() { 
  let price = document.querySelector('#price');
  price.setAttribute("max", "1000000");
}


