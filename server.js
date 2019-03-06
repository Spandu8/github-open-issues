var express = require('express'),
    app = express();
console.log("here")
app.use(express.static(__dirname));

var server = app.listen(3402);