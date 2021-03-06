var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res){
// 	res.send('Hello Express!');
// });

var middleware = require('./middleware.js')

app.use(middleware.logger);
//app.use(middleware.requireAuthentication); 

//about
app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About us!');
});

// console.log(__dirname);
app.use(express.static(__dirname + '/public'));

//PORT
app.listen(PORT, function (){
	console.log('Express server started! on port '+ PORT +' !');
});