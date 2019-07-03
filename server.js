var express = require ('express');
var app = express();

//CHANGE THE PORT AND GO TO PACKAGE JASON AND 'START'
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello joe')
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });