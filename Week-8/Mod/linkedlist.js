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
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }
  loop(node, callback = () => {}, key = "next") {
    if (node === null) {
      return;
    }

    callback(node);
    this.loop(node[key], callback, key);
  }
  print() {
    if (this.isEmpty()) {
      return [];
    }
    const elements = [];
    this.loop(this.head, (node) => {
      elements.push(node.value);
    });
    return elements;
  }
}

module.exports = {
  Linkedlist,
};
