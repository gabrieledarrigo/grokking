import { Node } from '../../src/data-structure/LinkedList';

describe('LinkedList', () => {
  describe('Node', () => {
    it('should have a value and a next property that points to another Node', () => {
      const node = new Node(1);
      const next = new Node(2);
      node.next = next;

      expect(node.value).toBe(1);
      expect(node.next).toBe(next);
    });
  });
});
