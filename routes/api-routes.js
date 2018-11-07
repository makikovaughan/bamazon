// Requiring our models
const db = require('../models');
const placeOrder = require('./api-order.js');

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
    console.log(req.body.bulkOrder);
    const orderItems = req.body.bulkOrder;
    let orderResult = [];

      placeOrder(orderItems, orderResult, function (results) {        
        if(orderItems.length === results.length){
          res.json(results);
        }
      });
    

  });

}