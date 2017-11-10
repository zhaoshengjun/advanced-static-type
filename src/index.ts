const numbers = [1, 2, [3, 4], 5, [6], [7], 8, 9];
const strings = ['a', 'b', ['c'], ['d', 'e', 'f'], 'g', 'h'];

function isFlat<T>(array: (T | T[])[]): array is T[] {
  return !array.some(Array.isArray);
}
if (isFlat(numbers)) {
  numbers;
}
