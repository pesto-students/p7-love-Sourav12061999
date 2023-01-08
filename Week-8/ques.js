// Reverse a linkedlist
class Node {
  constructor(value, prev, next) {
    this.value = value;
    (this.prev = prev || null), (this.next = next || null);
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.head === null;
  }
  add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }
  #loop(node, callback = () => {}) {
    if (node.next === null) {
      callback(node);
      return;
    }
    callback(node);
    this.#loop(node.next, callback);
  }
  print() {
    if (this.isEmpty()) {
      return [];
    }
    const elements = [];
    this.#loop(this.head, (node) => {
      elements.push(node.value);
    });
    return elements;
  }
}

const linkedlist = new Linkedlist();
linkedlist.add(10);
linkedlist.add(20);
linkedlist.add(30);
console.log(linkedlist.print());
