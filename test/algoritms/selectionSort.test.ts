import { selectionSort } from "../../src/algorithms/selectionSort";

describe('selectionSort', () => {
  it('should sort an array of number on descending order', () => {
    const arr = [11, 26, 82, 88, 93, 75, 39, 5, 86, 29, 47, 49, 52, 56, 31];

    const actual = selectionSort(arr);

    expect(actual).toEqual([
      5, 11, 26, 29, 31, 39,
     47, 49, 52, 56, 75, 82,
     86, 88, 93
   ]);
  });
});