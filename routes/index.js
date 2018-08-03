var express = require('express');
var router = express.Router();
var mymodule = require('./moduleTest');
let db = require("./mongoDbService");
let mongod = require("./mongoDbWSchema");
var log4js = require('log4js');
const logger = log4js.getLogger('cheese');
/* GET home page. */
router.get('/', async function (req, res, next) {
  logger.info('Index page is requested.');
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