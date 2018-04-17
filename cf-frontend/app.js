var path = require('path');
var cors = require('cors')
var express = require('express'); 
var expressapp = express();
var bodyParser = require('body-parser');
expressapp.use(express.static(path.join(__dirname, 'www')));
expressapp.use(bodyParser.urlencoded({ extended: true }));
expressapp.use(bodyParser.json());
var port = 8080;
expressapp.listen(port)