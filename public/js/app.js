$(function () {

    //Pop up window to diplay the order status
    const renderModal = function (data) {

        //Populate the result
        $("#order-status").text("Order Status").append("<br>");

        data.forEach(function (orderStatus) {

            const p = $("<p>").addClass("status").text(`Product Name: ${orderStatus.product_name}
            Order Status: ${orderStatus.order}`);
            $("#order-status").append(p);

        });
        

        //Open a pop up window to display
        $("#myModal").modal();
    }

    //Get the products data for for user
    const displayPage = function () {
        $.ajax({
            method: "GET",
            url: "/api/products"
        }).then(function (response) {
            const productItem = response;
            orderDisplay(productItem);
        }).catch(function (err) {
            console.log("Error", err);
        });
    }

    const sendOrder = function (e) {

        //Avoid reset
        e.preventDefault();

        // Get the order information
        const orderTable = document.querySelectorAll('tbody tr');

        const newOrder = [];


        //Get the order information to add to the array of Object(Orders)
        orderTable.forEach(function (row) {

            const orderData = row.querySelectorAll("td");
            const stockQuantity = orderData[3].childNodes[0].value;

            if (stockQuantity) {
                const newItem = {
                    product_name: orderData[2].textContent,
                    department_name: orderData[1].textContent,
                    quantity: orderData[3].childNodes[0].value
                }
                newOrder.push(newItem);
            }
        });

        //Clear the quantity to empty
        $(".quantity").val("");

        //Send the bulk order to the server
        $.ajax({
            method: "PUT",
            url: "/api/products",
            contentType: "application/json",
            data: JSON.stringify({ bulkOrder: newOrder })
        })
            .then(function (response) {

                //The order status
                const confirm = response;

                //Display the order status
                renderModal(confirm);
            }).catch(function (err) {
                console.log(err);
            });


    }

    //Displaying the home page
    displayPage();

    //Order button
    $("#orderButton").on("click", sendOrder);

    //Change the view
    $(".dropdown-item").on("click", changeScreen);

});