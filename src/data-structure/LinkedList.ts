export class Node<T> {
  value: T;

  next: Node<T> | null;

  /**
   * @param value The value of the Node
   * @param next  A reference to the next Node of the LinkedList
   */
  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * A LinkedList is a linear data structure consisting of a collection of Nodes which together represent a sequence.
 * Differently from arrays, which are a static data structures where elements are stored in contiguous memory locations, a LinkedList is a dynamic data structure.
 * Each element is stored in a different memory location, and has a reference to the next Node in the sequence.
 */
export class LinkedList<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Add a value to the tail of the LinkedList.
   *
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
   * Remove an element from the tail of the LinkedList.
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

  /**
   * Get an element at the ith index of the LinkedList, or return null otherwise.
   *
   * @param index The index of the element
   * @returns The element at the ith index or null
   */
  get(index: number): T | null {
    let i = 0;
    let current = this.head;

    while (current !== null && i < index) {
      current = current?.next ?? null;
      i += 1;
    }

    if (current === null) {
      return null;
    }

    return current.value;
  }
}
