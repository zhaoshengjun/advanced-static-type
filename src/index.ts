const numbers = [1, 2, [3, 4], 5, [6], [7], 8, 9];
const strings = ['a', 'b', ['c'], ['d', 'e', 'f'], 'g', 'h'];
function flatten<T>(array: (T | T[])[]): T[] {
  let flattened: T[] = [];
  for (const el of array) {
    if (Array.isArray(el)) {
      flattened.push(...el);
    } else {
      flattened.push(el);
    }
  }
  return flattened;
}

console.log(flatten(numbers));
console.log(flatten(strings));
