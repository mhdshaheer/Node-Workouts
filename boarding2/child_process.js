import { fork } from "child_process";

const child = fork("./worker");

child.on("message", (msg) => {
  console.log("message from child :", msg);
});
