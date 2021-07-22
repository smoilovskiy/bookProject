export function getRandomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function getRandomFloat(min, max) {
  return (min + Math.random() * (max - min)).toFixed(5);
}