/**
 * Created by wisdomJ on 2016-10-18.
 */
// models/Task.js

var mongoose = require("mongoose");

// schema
var todoSchema = mongoose.Schema(
    {
        text : {type: String, required: true},
        done : {type: Boolean, default:false}
    }
);

// create Collection
var Todo = mongoose.model("task", todoSchema);
module.exports = Todo;