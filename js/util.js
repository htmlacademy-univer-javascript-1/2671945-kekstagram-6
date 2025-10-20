export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

export function createArray(length, callback) {
  return Array.from({ length }, (_, i) => callback(i + 1));
}