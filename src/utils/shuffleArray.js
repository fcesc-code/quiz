import getRandomIntInclusive from "./randomizer";

export default function shuffleArray(arr) {
  const res = arr;
  let currentIndex = res.length;

  while (currentIndex > 0) {
    const randomIndex = getRandomIntInclusive(0, currentIndex);
    currentIndex -= 1;

    const temporaryValue = res[currentIndex];
    res[currentIndex] = res[randomIndex];
    res[randomIndex] = temporaryValue;
  }

  return res;
}
