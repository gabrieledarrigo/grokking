export function sum(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  const [_, ...rest] = arr;

  return arr[0] + sum(rest);
}