const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// 🔹 GET all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// 🔹 POST new employee
router.post("/", async (req, res) => {
  const { name, position, department } = req.body;
  const newEmp = new Employee({ name, position, department });
  await newEmp.save();
  res.json({ message: "Employee added" });
});

// 🔹 PUT update employee
router.put("/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Employee updated" });
});

// 🔹 DELETE employee
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
});

module.exports = router;
