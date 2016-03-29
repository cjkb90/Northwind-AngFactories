var express = require('express');
var router = express.Router();

router.get('/add',function(req,res){
	res.send("Here you can add salespeople");
});

module.exports = router;