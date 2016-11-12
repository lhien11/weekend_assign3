var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var math = require('./routes/math');

var app = express();

app.set("port", process.env.PORT || 3000);

// middleware for parsing the body and turning it into a JS object
app.use(bodyParser.urlencoded({extended: true}));

// middleware for serving static files
app.use(express.static('public'));

app.use('/math', math);

app.get('/', function(req, res){
  //console.log('Received a request at', new Date());
  // _dirname is the folder this file lives in
  var filename = path.join(__dirname, 'public/views/index.html');
  //console.log('filename:', filename);
  res.sendFile(filename);
});

app.listen(app.get("port"), function(){
  console.log("Server listening on : http://localhost:%s", + app.get("port"));
});
