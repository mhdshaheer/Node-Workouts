// import EventEmitter from "express";
import fs from "fs";

// const event = new EventEmitter();

// event.on("demo", () => {
//   fs.writeFile("output.txt", "Demo file is emitted", (err) => {
//     if (!err) {
//       console.log("file write");
//     }
//   });
// });

// event.emit("demo");

// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   console.log("demo called");
//     if (req?.role == "admin") {
//       fs.readFile("./output.txt", (data) => {
//         console.log(data);
//       });
//     } else {
//       console.log("demo called");
//     }
//   res.send("hello");
// });

// app.listen(3000, () => {
//   console.log("server is running 3000");
// });

import { fork } from "child_process";

const child = fork("./child.js");

child.on("message", (data) => {
  console.log("data from child :", data);
});
