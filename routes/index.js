var express = require('express');
var router = express.Router();
var models = require('../models/');
var Salesman = models.Salesman;

router.post('/add',function(req,res){
	res.send("Here you can add salespeople");
});

module.exports = router;