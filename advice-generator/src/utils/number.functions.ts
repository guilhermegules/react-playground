export function randomNumberInRange(min = 1, max = 200) {
  return Math.floor(Math.random() * (max - min) + min);
}
