'use strict';

require('dotenv').config();
const server = require('./src/ server');
//server is the name of the app exported from the server.js file
server.start(process.env.PORT);