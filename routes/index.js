var express = require('express');
var router = express.Router();
const StudentModel = require('../models/StudentModel');
const SubjectModel = require('../models/SubjectModel');

router.get("/student", async (req, res) => {
  // SQL: SELECT * FROM STUDENT
  const students = await StudentModel.find();
  // console.log(students);
  // res.send(students);
  res.render("student", { students: students });
});

router.get("/subject", async (req, res) => {
  const subjects = await SubjectModel.find();
  console.log(subjects);
});

module.exports = router;
