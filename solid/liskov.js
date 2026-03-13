// Objects of a child class should be replaceable with objects of the parent class without breaking the program.
// Eg:- If B is a child of A, then we should be able to use B instead of A without errors.

// ❌
// class Bird {
//   fly() {
//     console.log("Bird is flying");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins can't fly");
//   }
// }

// Good

class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("flying birds");
  }
}
class Sparrow extends FlyingBird {}

class Penguin extends Bird {
  swim() {
    console.log("I can swim");
  }
}

// Usage:
function makeBirdFly(bird) {
  bird.fly();
}

const sparrow = new Sparrow();
makeBirdFly(sparrow);
