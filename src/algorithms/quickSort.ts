// Swap the position of two array elements.
function swap(arr: number[], a: number, b: number) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

// Partition function takes an array of number, a starting index and an ending index.
// The function selects the last element of the array as the pivot element, and loop through the array from the start index
// to the end index - 1, comparing each element with the pivot. If the element is less than the pivot, the function swaps that element with the element pointed by the pointer variable,
// and increment the pointer.
// At the end of the loop the pivot is swapped with the element of the array pointed by the pointer, which places the pivot in the correct sorted position;
// In summary the array is partitioned: element less than the pivot are placed before the pivot, while element greater than the pilot are placed after.
function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];
  // Index that keeps track of the smaller element position
  let pointer = start;

  for (let index = start; index < end; index++) {
    if (arr[index] < pivot) {
      // Swap the current element with the element pointed by the index of smaller elements
      swap(arr, pointer, index);
      pointer++;
    }
  }

  // Place the pivot value in the middle of the array
  swap(arr, pointer, end);

  return pointer;
}

// Quick sort is a sorting algorithm with a O(n log n) complexity.
// The algorithm is a recursive algorithm which picks an element as a pivot,
// and partition the given array placing elements less than the pivot to its left, and element greater than the pivot to its right.
export function quickSort(arr: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  let middle = partition(arr, start, end);

  quickSort(arr, start, middle - 1);
  quickSort(arr, middle + 1, end);
}

``;
