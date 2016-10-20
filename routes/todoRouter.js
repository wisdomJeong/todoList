/**
 * Created by wisdomJ on 2016-10-18.
 */
// routes/todoRouter.js

var express = require("express");
var todoRouter = express.Router();
var Todo = require("../models/Todo");

// show
todoRouter.route("/todos").get(function(req, res){
  Todo.find({}, function(err){
    if(err)
      res.json(err);

    Todo.find({}, function(err, todos){
      if(err)
        res.json(err);
      res.json(todos);
    });
  });
});

//create
todoRouter.post("/new", function(req, res){
  Todo.create(req.body, function(err){
    if(err)
      res.json(err);

    Todo.find({}, function(err, todos){
      if(err)
        res.json(err);
      res.json(todos);
    });
  });
});

//destroy
todoRouter.delete("/delete/:id", function(req, res){
  Todo.remove({_id:req.params.id}, function(err){

    if(err)
      res.json(err);

    Todo.find({}, function(err, todos){
      if(err)
        res.json(err);
      res.json(todos);
    });
  });
});

//update
todoRouter.put("/updateTodo/:id", function(req, res){
  Todo.findOneAndUpdate({_id : req.params.id}, req.body, function(err){
    if(err)
      res.json(err);

    Todo.find({}, function(err, todos){
      if(err)
        res.json(err);
      res.json(todos);
    });
  });
});

//completeTodo
todoRouter.put("/completeTodo/:id", function (req, res) {
  Todo.findOneUpdate({_id : req.params.id}, req.body, function (err) {
    if(err)
      res.json(err);

    Todo.find({}, function(err, todos){
      if(err)
        res.json(err);
      res.json(todos);
    });
  });
});

module.exports = todoRouter;