const express = require('express');

const app = express();
const http = require('http').Server(app);
const port = 3000;

// app.use(express.static('../../../')); // for use when on matthewsemprit.github.io
app.use(express.static('../../public/')); //for use localhost:3000

http.listen(port, function(){
  console.log('listening on *:3000');
});

