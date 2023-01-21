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
  levelOrder() {
    const arr = [];
    this.#levelOrder(0, arr);
    return arr;
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
  #levelOrder(level = 0, arr, root = this.root) {
    if (root === null) {
      return;
    }
    if (arr[level] === undefined) {
      arr[level] = [];
    }

    arr[level].push(root.value);

    this.#levelOrder(level + 1, arr, root.left);
    this.#levelOrder(level + 1, arr, root.right);
  }
}
const binaryTree = new BinaryTree(3);
binaryTree.insert(1);
binaryTree.insert(20);
binaryTree.insert(10);
binaryTree.insert(30);

console.log(binaryTree.levelOrder());
