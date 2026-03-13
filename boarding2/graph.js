class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }
  hasEdge(v1, v2) {
    return this.adjList[v1].has(v2) && this.adjList[v2].has(v1);
  }
  removeEdge(v1, v2) {
    this.adjList[v1].delete(v2);
    this.adjList[v2].delete(v1);
  }
  removeVertex(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    for (let v of this.adjList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjList[vertex];
  }
  display() {
    for (let key in this.adjList) {
      console.log(`${key} => `, [...this.adjList[key]]);
    }
  }

  dfs(start, visited = new Set()) {
    if (visited.has(start)) {
      return;
    }
    console.log(start);
    visited.add(start);
    for (let item of this.adjList[start]) {
      this.dfs(item, visited);
    }
  }
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
      let curr = queue.shift();
      result.push(curr);
      for (let item of this.adjList[curr]) {
        if (!visited.has(item)) {
          queue.push(item);
          visited.add(item);
        }
      }
    }
    console.log(result);
  }
}

const graph = new Graph();
graph.addEdge(10, 20);
graph.addEdge(20, 30);
graph.display();
graph.dfs(10);
console.log("=============");
graph.bfs(10);
