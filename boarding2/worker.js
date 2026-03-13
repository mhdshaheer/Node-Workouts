// if (parentPort) {
//   let sum = 0;
//   for (let i = 0; i < 1000; i++) {
//     sum += i;
//   }
//   console.log("Worker thread completed the task.", sum);

//   parentPort.postMessage(sum);
// }
process.send("Task completed");
