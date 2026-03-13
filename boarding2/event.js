import { EventEmitter } from "events";

const event = new EventEmitter();

event.once("demo", () => {
  console.log("Demo is emitted");
});
event.on("test", () => {
  console.log("test is emitted");
});
event.emit("demo");
event.emit("demo");
event.emit("demo");
event.emit("test");
event.emit("test");
event.emit("test");
