function findSmallest(arr: number[]) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallest) {
      smallest = arr[index];
      smallestIndex = index;
    }
  }

  return smallestIndex;
}

function findLargest(arr: number[]) {
  let largest = arr[0];
  let largestIndex = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < largest) {
      largest = arr[index];
      largestIndex = index;
    }
  }

  return largestIndex;
}

// Selection Sort is a sorting algorithm
// It accepts in input an array of number and returns the same array sorted.
// Selection Sort takes the first element of the array and compare it with every other element to find the lower value,
// adding the latter to a new array.
// This procedure is applied to every element of the array, making the complexity of Selection Sort equal to O(n^2)
export function selectionSort(arr: number[]) {
  const sorted = [];

  for (let index = 0; index < arr.length; index++) {
    let smallest = findSmallest(arr);
    sorted.push(arr[smallest]);
  }

  return sorted;
}