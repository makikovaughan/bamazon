// Requiring our models
const db = require('../models');

module.exports = function (app) {

    app.get('/api/sales', function (req, res) {


        db.Product.findAll({
            where: {
                stock_quantity: {
                    $lte: 5
                }
            }
        }).then(function (dbSales) {
            console.log(dbSales);
            res.json(dbSales);
        }).catch(function (error) {
            console.log(error);
            res.json({ error: error });
        });
    });
}  