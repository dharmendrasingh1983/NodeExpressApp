var express = require('express');
var router = express.Router();
var mymodule = require('./moduleTest');
let db = require("./mongoDbService");
let mongod = require("./mongoDbWSchema");
/* GET home page. */
router.get('/', async function (req, res, next) {
  // var res = mymodule.cal(10, '+', 12);
  let teste = mymodule.cal(10, '+', 11);

  //let isDbConnected=await db.connect();
  // let isDbInsert=db.insert();
  //let select =  await db.select();
  await db.delete({
    Employeeid: 4,
    EmployeeName: "Dharmendra"
  });

  //await mongod.insert();
  //await mongod.select();

  // console.log(res);  
  res.render('index', {
    title: "Hello"
  });
});



module.exports = router;