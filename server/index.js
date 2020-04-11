const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World');
  });



// Server Setup
const port = 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
