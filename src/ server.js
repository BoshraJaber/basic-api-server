'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
// router modules
const clothesRouter = require('./ routes/clothes');
const foodRouter = require('./ routes/food');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/clothes/', clothesRouter);
app.use('/api/v1/food/', foodRouter);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};