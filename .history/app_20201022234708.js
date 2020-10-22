var Addition = require('./Addition.js');
console.log(Addition.AddNumber(1,2));

var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
console.log("Node Tutorial")
this.pTutor = function ()
{
var PTutor=Tutor
PTutor.tutorial();
}
}