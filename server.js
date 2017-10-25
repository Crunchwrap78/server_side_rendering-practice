const express = require('express');
const fs = require('fs');
const template = require('./template');

const server = express();
server.use('/', express.static('public'));
server.get('*', (req, res) => res
  .send(template));
server.listen(3000, function () {
    console.log('Server running on port 3000.');
});
