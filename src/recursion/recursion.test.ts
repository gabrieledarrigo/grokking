import { sum } from "./recursion";

describe('Recursion', () => {
  describe('sum', () => {
    it('should sum an array of numbers', () => {
      const arr = [3, 5, 7, 1, 4];

      expect(sum(arr)).toEqual(20);
    });
  });
});