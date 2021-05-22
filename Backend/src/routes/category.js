const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/api/category/get', (req, res) => {
  try {
    mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
