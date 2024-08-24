function upFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

function addPluralEnding(word: string, count: number): string {
  return `${word}${(count === 1) ? '' : 's'}`;
}

function getPositiveNumbers(count: number, start: number = 1): number[] {
  return Array.from({ length: count }, (_, index) => (start + index));
}

export { upFirstLetter, addPluralEnding, getPositiveNumbers };
