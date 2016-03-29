var express = require('express');
var app = express();
var router = require(__dirname + '/routes/index.js');

app.use(express.static('/public'));
//What is the purpose of serving static files?

app.use('/api', require('./routes/index.js'));

app.get('/',function(req,res){
	//res.send("Hi, you're home");
	res.sendFile(__dirname+'/public/index.html')
});

app.listen(3000, function(){
	console.log("Listening at port 3000");
});