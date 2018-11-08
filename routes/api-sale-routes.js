// Requiring our models
const db = require('../models');
const addStock = require('./api-stock.js');

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

    app.put('/api/sales', function (req, res) {

        //Get the stock information to add
        const orderItems = req.body.bulkOrder;
        let orderResult = [];

        addStock(orderItems, orderResult, res, function (results) {
            if (orderItems.length === results.length) {
                res.json(results);
            }
        });


    });
}  