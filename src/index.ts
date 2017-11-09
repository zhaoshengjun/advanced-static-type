const numbers = [1, 2, [3, 4], 5, [6], [7], 8, 9];
function flatten(array: (number | number[])[]): number[] {
  let flattened: number[] = [];
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
