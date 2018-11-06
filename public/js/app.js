$(function () {

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

    const displayPage = function () {
        $.ajax({
            method: "GET",
            url: "/api/products"
        }).then(function (response) {
            const productItem = response;
            orderDisplay(productItem);
        }).catch(function (err) {

        });
    }

    const sendOrder = function (e) {

        //Avoid reset
        e.preventDefault();

        const orderTable = document.querySelectorAll('tbody tr');

        const newOrder = [];



        orderTable.forEach(function (row) {

            const tdData = row.querySelectorAll("td");

            if (tdData[3].childNodes[0].value > 0 || tdData[3].childNodes[0].value !== "") {
                const newItem = {
                    product_name: tdData[2].textContent,
                    department_name: tdData[1].textContent,
                    quantity: tdData[3].childNodes[0].value
                }
                newOrder.push(newItem);
            }
        });

        $(".quantity").val("");


        $.ajax({
            method: "PUT",
            url: "/api/products",
            contentType: "application/json",
            data: JSON.stringify({ bulkOrder: newOrder })
        })
            .then(function (response) {
                const confirm = response;
                console.log(confirm);
                renderModal(confirm);
            }).catch(function (err) {
                console.log(err);
            });


    }

    displayPage();

    $("#orderButton").on("click", sendOrder);

    $(".dropdown-item").on("click", changeScreen);

});