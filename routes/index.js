var express = require('express');
var router = express.Router();
const StudentModel = require('../models/StudentModel');

router.get("/student", async (req, res) => {
  await students = StudentModel.find();
  console.log(student);
});

router.get("/subject", async (req, res) => {
  await subjects = SubjectModel.find();
  console.log(subjects);
});

module.exports = router;
