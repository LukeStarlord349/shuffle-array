const shuffleArray = require('../dist/index').default;
const { cryptoShuffleArray } = require ('../dist/index');

describe('shuffleArray', () => {
  test('returns a new array with the same elements as the input', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);

    // Check that a new array is returned (not the same reference)
    expect(shuffledArray).not.toBe(originalArray);

    // Check that the array lengths are identical
    expect(shuffledArray.length).toBe(originalArray.length);

    // Check that both arrays contain the same elements, regardless of order
    const sortedOriginal = [...originalArray].sort((a, b) => a - b);
    const sortedShuffled = [...shuffledArray].sort((a, b) => a - b);
    expect(sortedShuffled).toEqual(sortedOriginal);
  });
});

describe('cryptoShuffleArray', () => {
  const input = [1, 2, 3, 4, 5];

  it('should return a new array instance', () => {
    const result = cryptoShuffleArray(input);
    expect(result).not.toBe(input);
  });

  it('should contain the same elements as the input', () => {
    const result = cryptoShuffleArray(input);
    expect(result.sort()).toEqual([...input].sort());
  });

  it('should not mutate the original array', () => {
    const copy = [...input];
    cryptoShuffleArray(input);
    expect(input).toEqual(copy);
  });

  it('should likely return a different order on shuffle', () => {
    const shuffle1 = cryptoShuffleArray(input);
    const shuffle2 = cryptoShuffleArray(input);
    // Note: This test can occasionally fail due to randomness
    expect(shuffle1).not.toEqual(shuffle2);
  });

  it('should return an empty array if input is empty', () => {
    const result = cryptoShuffleArray([]);
    expect(result).toEqual([]);
  });

  it('should work with non-numeric values', () => {
    const input = ['a', 'b', 'c'];
    const result = cryptoShuffleArray(input);
    expect(result.sort()).toEqual(['a', 'b', 'c']);
  });
});