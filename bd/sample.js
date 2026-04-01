const { parseArgs } = require("node:util");

class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList) {
      this.adjList[vertex] = new Set(vertex);
    }
  }
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }
  removeEdge(v1, v2) {
    this.adjList[v1].delete(v2);
    this.adjList[v2].delete(v1);
  }
  removeVertex(vertex) {
    for (let item of this.adjList[vertex]) {
      this.removeEdge(vertex, item);
    }
    delete this.adjList[vertex];
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
    let result = [];
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while (queue.length) {
      let curr = queue.shift();
      result.push(curr);
      for (let item of this.adjList[curr]) {
        if (!visited.has(item)) {
          visited.add(item);
          queue.push(item);
        }
      }
    }
  }
  cloneGraph(start, visited = new Set(), clone = new Graph()) {
    if (visited.has(start)) {
      return clone;
    }
    visited.add(start);
    clone.addVertex(start);
    for (let item of this.adjList[start]) {
      clone.addEdge(item, start);
      this.cloneGraph(item, visited, clone);
    }
    return clone;
  }

  // countCycles() {
  //   let visited = new Set();
  //   let cycles = 0;

  //   const dfs = (node, parant) => {
  //     visited.add(node);
  //     for (let item of this.adjList[item]) {
  //       if (!visited.has(item)) {
  //         dfs(item, node);
  //       } else if (item != parant) {
  //         cycles++;
  //       }
  //     }
  //   };

  //   for (let vertex in this.adjList) {
  //     if (!visited.has(vertex)) {
  //       dfs(vertex, null);
  //     }
  //   }
  //   return cycles / 2;
  // }

  countCycles() {
    let visited = new Set();
    let cycles = 0;
    const dfs = (node, parant) => {
      visited.add(node);
      for (let item of this.adjList[node]) {
        if (!visited.has(item)) {
          dfs(item, node);
        } else if (item !== parant) {
          cycles++;
        }
      }
    };
    for (let item in this.adjList) {
      if (!visited.has(item)) {
        dfs(item, null);
      }
    }
    return cycles / 2;
  }
}
