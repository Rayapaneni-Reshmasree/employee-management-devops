const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let employees = [
  { id: 1, name: "John", role: "Developer" },
  { id: 2, name: "Alice", role: "DevOps Engineer" }
];

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.post("/employees", (req, res) => {
  employees.push(req.body);
  res.json({ message: "Employee Added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
