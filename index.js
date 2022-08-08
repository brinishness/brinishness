const moment = require("moment");
var fs = require("fs");
console.log("hello world");
console.log(moment().add(1).toObject())
fs.writeFile("test.txt","this is a test", function (err){
    console.log(err);
})
