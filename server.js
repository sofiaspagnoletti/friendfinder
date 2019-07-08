var express = require ('express');
var app = express();
var path = require("path");

//CHANGE THE PORT AND GO TO PACKAGE JASON AND 'START'
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello world')
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

// NEXT STEPS: 
// then type in terminal heroku login
// then git remote -y
// heroku create and the name we want
// git remote -v
// (git add, commit) + git push heroku master
// heroku open