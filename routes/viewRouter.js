/**
 * Created by wisdomJ on 2016-10-19.
 */
var express = require("express");
var viewRouter = express.Router();

viewRouter.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

module.exports =  viewRouter;