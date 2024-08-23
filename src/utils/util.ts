type Id = string | number | null;

function getById<T extends { id: Id }>(items: T[], id: Id, idName: keyof T = 'id'): T | undefined {
  return items.find((item) => item[idName] === id);
}

function upFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

function createArithmeticSequence(count: number, start: number = 0, step: number = 1): number[] {
  return Array.from({ length: count }, (_, index) => (start + (index + 1) * step));
}

export { getById, upFirstLetter, createArithmeticSequence };
