// Requiring our models
const db = require('../models');

const getStatus = function (results, newData, cb) {

    results.push({
        product_name: newData.product_name,
        order: "Processed"
    });

    console.log("Results", results);

    cb(results);

}

const updateDB = function (dbProduct, order, results, res, cb) {

    const newData = {
        product_name: dbProduct.product_name,
        department_name: dbProduct.department_name,
        price: dbProduct.price,
        stock_quantity: order.stock_quantity,
        picture: dbProduct.picture
    }

    db.Product.update(
        newData,
        {
            where: {
                product_name: dbProduct.product_name
            }
        }).then(function (dbPut) {
            getStatus(results, newData, cb);
        }).catch(function (error) {
            res.json({Error: error});
        });

}

module.exports = function (orderItems, results, res, cb) {

    orderItems.forEach(order => {

        db.Product.findOne({
            where: {
                product_name: order.product_name
            }
        }).then(function (dbProduct) {

            updateDB(dbProduct, order, results, res, cb);


        }).catch(function (error) {
            res.json({ Error: error });
        });
    });
}