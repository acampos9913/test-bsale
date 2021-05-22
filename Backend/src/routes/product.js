const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

router.get('/api/product/category/', (req, res) => {
    try {
      let category = req.query.category;
    let text = '%' + req.query.text + '%';
    let inicio = parseInt(req.query.page) * 5;
    inicio = inicio - 1;
    let fin = 5;
    if(parseInt(category) === 0){
      mysqlConnection.query("SELECT * FROM product WHERE name LIKE ?  LIMIT ?,?", [text, inicio, fin], (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
    }
    else{
      mysqlConnection.query("SELECT * FROM product WHERE category = ? and name LIKE ?  LIMIT ?,?", [category, text, inicio, fin], (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });
    }
    } catch (error) {
      console.log(error)
    }
  });

module.exports = router;
