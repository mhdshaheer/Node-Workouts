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
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  search(root, target) {
    if (!root) {
      return false;
    } else {
      if (root.value == target) {
        return true;
      } else if (root.value > target) {
        return this.search(root.left, target);
      } else {
        return this.search(root.right, target);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (!root) {
      return null;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  findClosest(value) {
    let curr = this.root;
    let closest = this.root.value;
    while (curr) {
      if (Math.abs(value - curr.value) < Math.abs(value - closest)) {
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
  getDepth(root) {
    if (!root) return 0;
    const left = this.getDepth(root.left);
    const right = this.getDepth(root.right);

    return Math.max(left, right) + 1;
  }
  isPerfect(root, depth = this.getDepth(root), level = 1) {
    if (!root) return true;
    if (!root.left && !root.right) return depth == level;
    if (!root.left || !root.right) return false;

    return (
      this.isPerfect(root.left, depth, level + 1) &&
      this.isPerfect(root.right, depth, level + 1)
    );
  }
}

function isSame(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.value != root2.value) return false;
  return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}

const tree = new Tree();
tree.insert(10);
tree.insert(40);
tree.insert(20);
tree.insert(30);
const tree2 = new Tree();
tree2.insert(10);
tree2.insert(40);
tree2.insert(20);
tree2.insert(30);
console.log("==================");
// console.log("closest path is : ", tree.findClosest(16));
console.log(isSame(tree.root, tree2.root));
