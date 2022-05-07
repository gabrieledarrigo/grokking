export class Node<T> {
  value: T;

  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 *
 */
export class LinkedList<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Add a value to the tail of the LinkedList
   * @param value the value to add
   */
  add(value: T): void {
    const node = new Node(value);

    if (this.tail === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  /**
   * Remove an element from the tail of the LinkedList
   */
  remove(): void {
    if (this.tail !== null) {
      const last = this.tail;

      let current = this.head;

      while (current?.next !== last) {
        current = current?.next ?? null;
      }

      this.tail = current;
      this.tail.next = null;
    }
  }
}
