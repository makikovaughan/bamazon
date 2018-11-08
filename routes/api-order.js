// Requiring our models
const db = require('../models');

const getStatus = function(results, newData, cb){

    results.push({
        product_name: newData.product_name,
        order: "Processed"
    });
    cb(results);

}

const updateDB = function (dbProduct, order, results, cb) {


    let newQuantity = dbProduct.stock_quantity;

    if (parseInt(order.quantity) <= parseInt(dbProduct.stock_quantity)) {
        newQuantity -= order.quantity;

        const newData = {
            product_name: dbProduct.product_name,
            department_name: dbProduct.department_name,
            price: dbProduct.price,
            stock_quantity: newQuantity
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
                console.log("Error:", error);
            });
    }
    else {
        results.push({
            product_name: dbProduct.product_name,
            order: "Out of Stock"
        });
    }
}

module.exports = function (orderItems, results, res, cb) {

    orderItems.forEach(order => {

        db.Product.findOne({
            where: {
                product_name: order.product_name
            }
        }).then(function (dbProduct) {

            updateDB(dbProduct, order, results, cb);


        }).catch(function (error) {
            res.json({ Error: error });
        });
    });
}