class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (newNode.value > root.value) {
        if (root.right == null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  closest(value) {
    let curr = this.root;
    let closest = this.root.value;
    while (curr) {
      if (Math.abs(value - curr.value) < Math.abs(closest - curr.value)) {
        closest = curr.value;
      }
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return curr.value;
      }
    }
    return closest;
  }

  isBst(root, min = -Infinity, max = Infinity) {
    if (!root) {
      return true;
    }
    if (root.value >= max || root.value <= min) {
      return false;
    }
    return (
      this.isBst(root.left, min, root.value) &&
      this.isBst(root.right, root.value, max)
    );
  }
  isSame(root1, root2) {
    if (!root1 && !root2) {
      return true;
    }
    if (!root1 || !root2) {
      return false;
    }
    if (root1.value != root2.value) {
      return false;
    }
    return (
      this.isSame(root1.left, root2.left) &&
      this.isBst(root1.right, root2.right)
    );
  }
}
