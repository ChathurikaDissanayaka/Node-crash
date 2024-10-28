import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodbyeHandler(name) {
  console.log("Bye " + name);
}

// Register event listner
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("greet", "Jhon");
myEmitter.emit("goodbye", "Jhon");

// Error handling
myEmitter.on("error", (err) => {
  console.log("An error occured. " + err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
