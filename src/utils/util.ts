type Id = string | number

function getById<T extends { id: Id }>(items: T[], id: Id, idName: keyof T = 'id'): T | undefined {
  return items.find((item) => item[idName] === id);
}

function upFirstLetter(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export { getById, upFirstLetter };
