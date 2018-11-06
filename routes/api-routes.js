// Requiring our models
const db = require('../models');

module.exports = function (app) {

  app.get('/api/products', function (req, res) {

    db.Product.findAll({
    }).then(function (dbProduct) {
      res.json(dbProduct);
    }).catch(function (error) {
      res.json({ error: error });
    });
  });

  app.put('/api/products', function (req, res) {
    const orderItems = req.body.bulkOrder;
    let orderResult = [];

      require('./api-order.js')(orderItems, res, function (results) {
        orderResult = results;
        console.log("result", results);
        res.json(orderResult);
      });
    

  });

}