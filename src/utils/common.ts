function upFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

function addPluralEnding(word: string, count: number): string {
  return `${word}${(count === 1) ? '' : 's'}`;
}

const getRandomNumber = (minNumber: number = 0, maxNumber: number = 0): number => {
  const absMinNumber = Math.abs(minNumber);
  const absMaxNumber = Math.abs(maxNumber);

  const realMinNumber = Math.min(absMinNumber, absMaxNumber);
  const realMaxNumber = Math.max(absMinNumber, absMaxNumber);

  const startNumber = Math.ceil(realMinNumber);
  const endNumber = Math.floor(realMaxNumber);

  const result = Math.random() * (endNumber - startNumber + 1) + startNumber;

  return Math.floor(result);
};

const getRandomArrayElement = <T>(items: T[]) => (items.length === 0) ? null : items[getRandomNumber(0, items.length - 1)];

export { upFirstLetter, addPluralEnding, getRandomArrayElement };
