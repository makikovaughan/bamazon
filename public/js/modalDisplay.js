    //Pop up window to diplay the order status
    const renderModal = function (data) {

        //Populate the result
        $("#order-status").text("Order Status").append("<br>");

        data.forEach(function (orderStatus) {

            const p = $("<p>").addClass("status").text(`Product Name: ${orderStatus.product_name}`).append("<br>");
            p.append(`Order Status: ${orderStatus.order}`);
            $("#order-status").append(p);

        });
        

        //Open a pop up window to display
        $("#myModal").modal();
    }