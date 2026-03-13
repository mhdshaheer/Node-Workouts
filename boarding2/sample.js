import fs, { read } from "fs";

// const readStream = fs.createReadStream("demo.txt", "utf8");

// readStream.on("data", (chunk) => {
//   console.log("Chunk : ", chunk);
// });
// readStream.on("end", () => {
//   console.log("finished reading");
// });

// const writeStream = fs.createWriteStream("output.txt");

// writeStream.write("shaheer\n");
// writeStream.write("Good morning\n");

// writeStream.end();

const readStream = fs.createReadStream("demo.txt");
const writStream = fs.createWriteStream("out.txt");

readStream.pipe(writStream);
