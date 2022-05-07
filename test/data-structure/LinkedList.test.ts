import { LinkedList, Node } from '../../src/data-structure/LinkedList';

describe('LinkedList', () => {
  describe('add', () => {
    it('should add a value to the head of the list if the LinkedList is empty', () => {
      const value = 1;

      const list = new LinkedList<number>();
      list.add(value);

      expect(list.head?.value).toBe(value);
    });

    it('should add a value to the last position of the list if the LinkedList is not empty', () => {
      const value = 1;
      const nextValue = 2;

      const list = new LinkedList<number>();
      list.add(value);
      list.add(nextValue);

      expect(list.head?.next?.value).toBe(nextValue);
      expect(list.tail?.value).toBe(nextValue);
    });
  });

  describe('remove', () => {
    it('should remove the last value from the list', () => {
      const value = 1;
      const nextValue = 2;
      const lastValue = 3;

      const list = new LinkedList<number>();
      list.add(value);
      list.add(nextValue);
      list.add(lastValue);
      list.remove();

      expect(list.head?.value).toBe(value);
      expect(list.tail?.value).toBe(nextValue);
    });
  });
});

describe('Node', () => {
  it('should have a value and a next property that points to another Node', () => {
    const node = new Node(1);
    const next = new Node(2);
    node.next = next;

    expect(node.value).toBe(1);
    expect(node.next).toBe(next);
  });
});