import express from "express";

const app = express();
const router = express.Router();

// app.get("/sum/:num1/:num2", (req, res) => {
//   let sum = req.params.num1 + req.params.num2;
//   res.status(200).send("sum : " + sum);
// });
// app.listen(3000, (req, res) => {
//   console.log("Server is running");
// });
import rateLimit from "express-rate-limit";

const limit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
});
app.use("/login", limit);
