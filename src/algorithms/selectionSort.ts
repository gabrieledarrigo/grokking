// Selection Sort is a sorting algorithm
// It accepts in input an array of number and returns the same array sorted.
// Selection Sort takes the first element of the array and compare it with every other element to find the smallest element.
// When it found the smallest element, Selection Sort swaps it with the ith element.
// This procedure is applied to every element of the array, making the complexity of Selection Sort equal to O(n^2)
export function selectionSort(arr: number[]): number[] {
  const length = arr.length;

  for (let index = 0; index < length; index++) {
    let smallestIndex = index;

    for (let subIndex = index + 1; subIndex < arr.length; subIndex++) {
      if (arr[subIndex] < arr[smallestIndex]) {
        smallestIndex = subIndex;
      }
    }

    const temp = arr[index];
    arr[index] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }

  return arr;
}