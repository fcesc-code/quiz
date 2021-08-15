function getRandomIntInclusive(min, max) {
  const { random } = Math;
  const randomBuffer = new Uint32Array(1);

  window.crypto === undefined
    ? (randomBuffer[0] = Math.floor(random() * (max - min) + min))
    : window.crypto.getRandomValues(randomBuffer);

  const randomNumber = randomBuffer[0] / (0xffffffff + 1); // 0xffffffff + 1 is the max of Uint32Array

  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(randomNumber * (newMax - newMin + 1)) + newMin;
}

export default getRandomIntInclusive;
