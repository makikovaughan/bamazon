const addNewProduct = function (e) {

    //Avoid reset
    e.preventDefault();

    //Get the new product information from the user
    const newItem = {
        product_name: $("#inputItem").val(),
        department_name: $("#inputDepartment").val(),
        stock_quantity: $("#inputStock").val(),
        price: $("#inputPrice").val(),
        picture: $("#inputPicture").val()
    }

    //Clear all values
    $("#inputItem").val("");
    $("#inputDepartment").val("");
    $("#inputStock").val("");
    $("#inputPrice").val("");
    $("#inputPicture").val("");

    $.ajax({
        method: "POST",
        url: "/api/sales",
        data: newItem
    }).then(function (response) {

        //The order status
        const confirm = response;

        console.log("Client side", confirm);

        //Display the order status in modalDisplay.js
        renderModal(confirm);

    }).catch(function (err) {
        console.log(err);
    });


}