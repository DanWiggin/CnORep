var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser'),
  ssi = require("ssi"),
  inputDirectory = "/public",
  outputDirectory = "/public",
  matcher = "/*.html",
  includes = new ssi(inputDirectory, outputDirectory, matcher);
  
  includes.compile();


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 
// register bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// server the static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('index.html')
})

var todoListRoutes = require('./api/routes/todoListRoutes'); //importing route
todoListRoutes(app); //register the route



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
