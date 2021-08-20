/* eslint-disable import/prefer-default-export */
export const generateRandomNumbersArray = (arr) => {
  while (arr.length < 7) {
    const r = Math.floor(Math.random() * 32) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
};

export const generateRandomNumber = (max) => {
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
};
