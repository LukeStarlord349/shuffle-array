# @supidupiluki/shuffle-array (Class 2 Example)

> A small library that takes an array as input and returns a new array that is shuffled.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @supidupiluki/shuffle-array
```
Install via yarn:

```bash
yarn add @supidupiluki/shuffle-array
```

## Usage

Basic Usage

```js
import shuffleArray from '@supidupiluki/shuffle-array';

const startArray = [1, 2, 3, 4, 5];
const newShuffledArray = shuffleArray(startArray);

console.log(startArray);       // e.g., [1, 2, 3, 4, 5]
console.log(newShuffledArray); // e.g., [3, 1, 5, 2, 4]
```

```js
import shuffleArray, { cryptoShuffleArray } from '@supidupiluki/shuffle-array';

const data = ['alpha', 'beta', 'gamma', 'delta'];
const shuffled = cryptoShuffleArray(data);

console.log(shuffled); // e.g., ['gamma', 'alpha', 'delta', 'beta']
```

### Examples

Shuffle a list of user IDs:

```js
import shuffleArray from '@supidupiluki/shuffle-array';

const userIds = ['u1', 'u2', 'u3', 'u4'];
const randomizedOrderOfUserIds = shuffleArray(userIds);

console.log(randomizedOrderOfUserIds); // e.g., ['u1', 'u3', 'u4', 'u2']
```

Use in a game for randomizing cards:

```js
import shuffleArray from '@supidupiluki/shuffle-array';

const deck = ['Ace of Spades', 'Two of Hearts']; // some card deck
const shuffledDeck = shuffleArray(deck);

console.log(shuffledDeck); // e.g., ['Two of Hearts', 'Ace of Spades', ...]
```

Securely shuffle a list of tokens:

```js
import shuffleArray, { cryptoShuffleArray } from '@supidupiluki/shuffle-array';

const tokens = ['tokenA', 'tokenB', 'tokenC', 'tokenD'];
const shuffledTokens = cryptoShuffleArray(tokens);

console.log(shuffledTokens); // e.g., ['tokenC', 'tokenA', 'tokenD', 'tokenB']
```


Use in a cryptographic lottery draw:

```js
import shuffleArray, { cryptoShuffleArray } from '@supidupiluki/shuffle-array';

const participants = ['Alice', 'Bob', 'Charlie', 'Diana'];
const randomizedWinners = cryptoShuffleArray(participants);

console.log(randomizedWinners); // e.g., ['Diana', 'Alice', 'Charlie', 'Bob']
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

**Important Note**: This library uses non-cryptographic randomness (`Math.random()`). Do not rely on it for security-critical functionality.

## License

This project is licensed under the [MIT License](./LICENSE.md).
