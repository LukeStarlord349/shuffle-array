export default function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((currentItem, nextItem) => currentItem.sort - nextItem.sort)
    .map(({ value }) => value);
};

const crypto = require('crypto');
export function cryptoShuffleArray(array) {
return array
.map(value => ({ value, sort: crypto.randomInt(0, 2 ** 32) }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value);
};
