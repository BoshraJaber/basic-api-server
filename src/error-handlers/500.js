'use strict';  
module.exports = (err, req, res, next) => {
  res.status(500);
  res.json({
    // status: 500,
    message: "Server Error",
    route: req.path,
  });
};