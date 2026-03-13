// const { Worker } = require("worker_threads");

// console.log("Main thread started");
// const worker = new Worker("./worker.js");

// worker.on("message", (result) => {
//   console.log("Result is :", result);
// });
// worker.on("error", (err) => {
//   console.log("Error is :", err);
// });

// console.log("Main thread continues running...");

import { sum } from "./module.js";
let result = sum(10, 30);
console.log("Result is :", result);
