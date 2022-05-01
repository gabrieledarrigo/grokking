export class Node<T> {
  value: T;

  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;

  constructor(head: Node<T> | null = null) {
    this.head = head;
  }
}
