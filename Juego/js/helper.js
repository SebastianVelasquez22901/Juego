
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
  if (distance < 30) {
    return "Casi la clavas crack";
  } else if (distance < 40) {
    return "Tan cerca pero tan lejos";
  } else if (distance < 60) {
    return "Ya te vas alejando jijiji";
  } else if (distance < 100) {
    return "Te me vas, te me vas...";
  } else if (distance < 180) {
    return "No no... camino equivocado";
  } else if (distance < 360) {
    return "Pense que querias ganar";
  } else {
    return "Helao";
  }
}
