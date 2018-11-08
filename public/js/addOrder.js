const addOrder = function (e) {

    //Avoid reset
    e.preventDefault();

    // Get the stock information
    const stockTag = document.querySelectorAll('tbody#addStock tr');

    const newOrder = [];

    //Get the stock information to add to the array of Object(Orders)
    stockTag.forEach(function (row) {

        const stockQuantity = parseInt(row.childNodes[3].value.trim());
        const currentStock = parseInt(row.childNodes[3].placeholder.trim());
        const newStock = stockQuantity + currentStock;

        //If there is a value in the stock input, then push to a new order
        if (stockQuantity) {
            const newItem = {
                product_name: row.childNodes[2].textContent,
                department_name: row.childNodes[1].textContent,
                stock_quantity: newStock
            }
            newOrder.push(newItem);
        }
    });

    //Clear the stock to empty
    $(".stock").val("");

    if (newOrder.length > 0) {
        //Send the bulk order to the server
        $.ajax({
            method: "PUT",
            url: "/api/sales",
            contentType: "application/json",
            data: JSON.stringify({ bulkOrder: newOrder })
        }).then(function (response) {

            //The order status
            const confirm = response;

            //Display the order status in modalDisplay.js
            renderModal(confirm);

        }).catch(function (err) {
            console.log(err);
        });
    }
    else {
        const errorMessage = [];

        errorMessage.push({
            product_name: "No Product selected",
            order: "Please select the product"
        });

        renderModal(errorMessage);
    }

}