var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Hi, you're home");
});

app.listen(3000, function(){
	console.log("Listening at port 3000");
});