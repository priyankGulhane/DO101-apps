var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('hello Good Morning all !\n'+ new Date());
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

