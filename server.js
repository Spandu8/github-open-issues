var express = require('express'),
    app = express();
console.log("here")
app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);

