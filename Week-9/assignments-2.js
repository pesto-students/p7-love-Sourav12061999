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
  validate(root = this.root, min = null, max = null) {
    if (root === null) return true;

    if (min != null && min >= root.value) {
      return false;
    }

    if (max != null && max <= root.value) {
      return false;
    }

    return (
      this.validate(root.left, min, root.value) &&
      this.validate(root.right, root.value, max)
    );
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
}
