/* eslint-disable import/prefer-default-export */
export const generateRandomNumber = (arr) => {
  while (arr.length < 7) {
    const r = Math.floor(Math.random() * 32) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
};
