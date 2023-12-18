// Binary search is a search algorithm.
// It accepts in input an array of sorted elements and returns the position of the searched element if it's present in the list, or null otherwise.
// Binary search works by splitting the array in two halves; if the middle element of the array is the searched one, it returns it.
// If the searched element is lower than the middle element,the algorithm repeat the search in the lower half of the array;
// Otherwise, if the searched element is higher than the middle element, it continues the search in the higher half of the array.
// Binary search has a time complexity of O(log n) in the worst case.

/**
 * Performs a recursive binary search on a sorted array.
 *
 * @param arr - The sorted array to search.
 * @param search - The value to search for.
 * @param low - The lower index of the search range.
 * @param high - The upper index of the search range.
 * @returns The index of the found element, or null if not found.
 */
export function recursiveBinarySearch(arr: number[], search: number, low: number, high: number): number | null {
  if (low > high) {
    return null;
  }

  const mid = Math.floor((low + high) / 2);
  const guess = arr[mid];

  if (guess === search) {
    return mid;
  }

  if (guess > search) {
    return recursiveBinarySearch(arr, search, low, mid - 1);
  }

  if (guess < search) {
    return recursiveBinarySearch(arr, search, mid + 1, high);
  }

  return null;
}

/**
 * Performs a binary search on a sorted array to find the index of a given element.
 * If the element is found, returns the index of the element. Otherwise, returns null.
 *
 * @param arr - The sorted array to search in.
 * @param search - The element to search for.
 * @returns The index of the element if found, otherwise null.
 */
export function binarySearch(arr: number[], search: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === search) {
      return mid;
    }

    if (guess > search) {
      high = mid - 1;
    }

    if (guess < search) {
      low = mid + 1;
    }
  }

  return null;
}
