class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = value ? new Node(value) : null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) this.root = newNode;
    else {
      this.#insertNode(this.root, newNode);
    }
  }
  length() {
    return this.#lengthCalc();
  }

  // All Private Functions Here
  #insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.#insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.#insertNode(root.right, newNode);
      }
    }
  }
  #lengthCalc(length = 0, node = this.root) {
    if (node === null) {
      return length;
    }

    return Math.max(
      this.#lengthCalc(length + 1, node.left),
      this.#lengthCalc(length + 1, node.right),
      length
    );
  }
}

const binaryTree = new BinaryTree(3);
binaryTree.insert(1);
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(30);

console.log(binaryTree.length());
