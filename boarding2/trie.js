// 1. Insert
// 2. StartWith
// 3. Auto complete
// 4. contains;

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let item of word) {
      if (!(item in curr.children)) {
        curr.children[item] = new Node();
      }
      curr = curr.children[item];
    }
    curr.isWordEnd = true;
  }
  contains(word) {
    let curr = this.root;
    for (let item of word) {
      if (!(item in curr.children)) {
        return false;
      }
      curr = curr.children[item];
    }
    return curr.isWordEnd;
  }
  startWith(word) {
    let curr = this.root;
    for (let item of word) {
      if (!(item in curr.children)) {
        return false;
      }
      curr = curr.children[item];
    }
    return true;
  }
  autocomplete(prefix) {
    let result = [];
    let node = this.findNode(prefix);
    if (!node) {
      return result;
    }
    this.collectWords(node, prefix, result);
    return result;
  }
  findNode(prefix) {
    let curr = this.root;
    for (let item of prefix) {
      if (!(item in curr.children)) {
        return null;
      }
      curr = curr.children[item];
    }
    return curr;
  }
  collectWords(node, prefix, result) {
    if (node.isWordEnd) {
      result.push(prefix);
    }
    for (let item of prefix) {
      this.collectWords(node.children[item], prefix + item, result);
    }
  }
}

let trie = new Trie();
trie.insert("cat");
trie.insert("mat");

console.log(trie.autocomplete("ca"));
