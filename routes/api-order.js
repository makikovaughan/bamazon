// Requiring our models
const db = require('../models');
const results=[];

const updateDB = function (dbProduct, order, cb) {


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
                results.push({
                    product_name: newData.product_name,
                    order: "Processed"
                });
                console.log("there", results);
                cb(results);
            }).catch(function (error) {
                console.log("Error:", error);
            });
        console.log("here", results);
    }
    else {
        results.push({
            product_name: dbProduct.product_name,
            order: "Out of Stock"
        });
        console.log(results);
        cb(results);
    }

}

module.exports = function (orderItems, res, cb) {


    orderItems.forEach(order => {

        db.Product.findOne({
            where: {
                product_name: order.product_name
            }
        }).then(function (dbProduct) {

            updateDB(dbProduct, order, cb);


        }).catch(function (error) {
            //res.json({ Error: error });
        });
    });
}