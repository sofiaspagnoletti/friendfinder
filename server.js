var express = require ('express');
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;

// app.get('/', function(req, res){
//     res.send('hello world')
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

