// Business (or back-end) logic:
// Arrays of ice cream flavors, image sources, and image alt text
let iceCreams = ['Mint chocolate chip', 'Vanilla', 'Strawberry'];
let imgSources = ['img/mint-chocolate-chip.png', 'img/vanilla.png', 'img/strawberry.png'];
let imgAlts = ['Picture of a mint chocolate chip ice cream cone', 'Picture of a vanilla ice cream cone', 'Picture of a strawberry ice cream cone'];

// User interface (or front-end) logic:
// Function to create an li and append it to main ul
function createLi(iceCreamFlavor, imageSourceName, imageAltName) {
  let li = $('<li></li>');
  let p = $('<p><span>' + iceCreamFlavor + '<span></p>');
  let img = $('<img src=\'' + imageSourceName + '\' alt=\'' + imageAltName + '\'>');
  li.append(p);
  li.append(img);
  $('main ul').append(li);
}

// For loop to create an li, loop through the arrays, and give the li their content
for (let i = 0; i < iceCreams.length; i++) {
  createLi(iceCreams[i], imgSources[i], imgAlts[i]);
}
