const express = require("express");
const app = express();
const cors = require("cors");
const fibonacciRoute = require("./routes/fibonnaci");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "You've reached Fibonacci server" });
});

app.use("/fibonacci", fibonacciRoute);

app.get("*", (req, res) => {
  res.status(404).json({ msg: "Route doesn't exist" });
});

const port = 5050;

app.listen(port, () => {
  console.log(`Fibonacci listening on port ${port}`);
});
