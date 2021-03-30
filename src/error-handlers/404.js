'use strict';
module.exports = (req, res) => {
  // console.log(req);
  res.status(404);
  res.json({
    method: 'GET',
    message: 'Not Found',
    route: req.path,
  });
};
