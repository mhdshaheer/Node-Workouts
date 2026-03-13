// class Graph {
//   constructor() {
//     this.adjList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjList[vertex]) {
//       this.adjList[vertex] = new Set();
//     }
//   }
//   addEdge(v1, v2) {
//     this.addVertex(v1);
//     this.addVertex(v2);
//     this.adjList[v1].add(v2);
//     this.adjList[v2].add(v1);
//   }

//   deleteEdge(v1, v2) {
//     this.adjList[v1].delete(v2);
//     this.adjList[v2].delete(v1);
//   }

//   deleteVertex(v1) {
//     if (!this.adjList[v1]) {
//       return;
//     }
//     for (let item of this.adjList[v1]) {
//       this.deleteEdge(v1, item);
//     }
//   }

//   dfs(start, visited = new Set()) {
//     if (visited.has(start)) {
//       return;
//     }
//     console.log(start);
//     visited.add(start);
//     for (let item of this.adjList[start]) {
//       this.dfs(item, visited);
//     }
//   }
// }

// function cloneGraph() {

// }

// const graph = new Graph();
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("C", "D");

// graph.dfs("A");
