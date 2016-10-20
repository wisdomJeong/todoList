// app.js

var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var todoRouter = require("./routes/todoRouter");
var viewRouter = require("./routes/viewRouter");
var app = express();

// DB setting
mongoose.connect("mongodb://localhost/todolist");
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB Error : " +  err);
});

// Other setting
app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'));
app.use(bodyParser.json({type : 'application/vnd.api+json'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());

// Routes
app.use("/todo", todoRouter);
app.use("/", viewRouter);

// Port setting
app.listen(3000, function(){
  console.log("server on!");
});