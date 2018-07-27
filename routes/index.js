var express = require('express');
var router = express.Router();
var mymodule = require('./moduleTest');
/* GET home page. */
router.get('/', function (req, res, next) {
 // var res = mymodule.cal(10, '+', 12);
  let teste=mymodule.cal(10,'+',11);
 // console.log(res);  
  res.render('index', {
    title: mymodule.hello()
  });
});



module.exports = router;