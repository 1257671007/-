var express = require('express');
var router = express.Router();
var fs=require('fs')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456'
});


/* GET home page. */
router.post('/', function(req, res, next) {
  connection.connect();//��ʼ����
  connection.query('SELECT * FROM test.tess', function(err, rows, fields) {  //query--��ѯ
    res.header('Access-Control-Allow-Origin',"*")
    if (err) throw err;
    //console.log(rows)
    res.send(rows)

  });

  connection.end(); //���ӽ���
});

module.exports = router;
