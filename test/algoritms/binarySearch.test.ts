import { binarySearch, recursiveBinarySearch } from '../../src/algorithms/binarySearch';

describe('binarySearch', () => {
  describe('iterative binarySearch', () => {
    it('should return the index of the searched element if it is present in the input array', () => {
      const arr = [2, 4, 7, 10, 29, 32, 56, 75, 95];

      const actual = binarySearch(arr, 29);

      expect(actual).toEqual(4);
    });

    it('should return null if the searched element is not present in the input array', () => {
      const arr = [2, 4, 7, 10, 29, 32, 56, 75, 95];

      const actual = binarySearch(arr, 314);

      expect(actual).toBe(null);
    });
  });

  describe('recursive binarySearch', () => {
    it('should return the index of the searched element if it is present in the input array', () => {
      const arr = [2, 4, 7, 10, 29, 32, 56, 75, 95];

      const actual = recursiveBinarySearch(arr, 29, 0, arr.length);

      expect(actual).toEqual(4);
    });

    it('should return null if the searched element is not present in the input array', () => {
      const arr = [2, 4, 7, 10, 29, 32, 56, 75, 95];

      const actual = recursiveBinarySearch(arr, 314, 0, arr.length);

      expect(actual).toBe(null);
    });
  });
});
