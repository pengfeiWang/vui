var path = require('path');
var express = require("express");
var app = express();
var port = 4001;


app.use(express.static(path.join(__dirname, '../docs/_book')));
app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

})