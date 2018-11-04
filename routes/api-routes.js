// Requiring our models
const db = require('../models');

module.exports = function(app) {

  app.get('/api/product', function(req, res) {

    console.log(db);
    db.Product.findAll({
    }).then(function(dbProduct) {
      res.json(dbProduct);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

}