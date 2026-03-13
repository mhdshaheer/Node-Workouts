// class PaymentProcessor {
//   pay(method, amount) {
//     if (method === "card") {
//       console.log("Processing Card Payment:", amount);
//     }
//     else if (method === "upi") {
//       console.log("Processing UPI Payment:", amount);
//     }
//   }
// }

// const payment = new PaymentProcessor();
// payment.pay("card", 1000);

class Payment {
  pay(amount) {
    throw new Error("Method must be implemented");
  }
}

class CardPayment extends Payment {
  pay(amount) {
    console.log("Paid using card : ", amount);
  }
}

class UpiPayment extends Payment {
  pay(amount) {
    console.log("Paid using UPI :", amount);
  }
}

const card = new CardPayment();
const UPI = new UpiPayment();

function processPayment(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

processPayment(card, 2000);
