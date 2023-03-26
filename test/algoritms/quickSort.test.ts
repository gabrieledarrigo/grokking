import { quickSort } from '../../src/algorithms/quickSort';

describe('Quick sort', () => {
  it('should sort an array of unordered elements', () => {
    const arr = [7, -2, 4, 1, 6, 5, 0, -4, 2];

    quickSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([-4, -2, 0, 1, 2, 4, 5, 6, 7]);
  });
});
