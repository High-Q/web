/* eslint-disable no-undef */
var express = require('express');
var serveStatic = require("serve-static")
var path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 80;
app.listen(port);