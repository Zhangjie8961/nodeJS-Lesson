var express = require('express');
var router = express.Router();
var {users,chapterList} = require('../views/data.json');
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res,next) {
  console.log(req.body);
  for(var i =0;i<users.length;i++){
  if (req.body.username == users[i].username &&req.body.pwd == users[i].password ) {
    res.render('list',{chapterList:chapterList});
  } else {
    res.render('error',{message:'用户密码错误'});
    
}
  }
});

module.exports = router;
