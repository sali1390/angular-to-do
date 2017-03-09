var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var ToDo = require("./models/todos.js");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.Promise = Promise;

app.use(express.static(__dirname + "/app"));

mongoose.connect("mongodb://localhost/angularToDo");
var db = mongoose.connection

db.on("error", function(error) {
    console.log("Mongoose Error: " + error)
});

db.once("open", function() {
   console.log("Mongoose Connection Successful.")
});

require("./api/get-todos.js")(app);
require("./api/post-todos.js")(app);
//require("./api/put-items.js")(app);

var exampleToDo = new ToDo({
    todo: "Wash Dishes",
    status: false,
    completeBy: "2017-03-18T16:00:00Z"
});

exampleToDo.save(function(error, doc) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(doc)
    }
});

app.listen(port, function(){
    console.log("Listening on port: " + port);
});