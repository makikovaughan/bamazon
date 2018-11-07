const orderDisplay = function (productItem) {

    $("#order").empty();

    //Creating a <tbody>
    const tbody = $("<tbody>");



    productItem.forEach(e => {

        //Creating <tr>
        const tr = $("<tr>");


        //Creating <td> containing a product picture
        const tdPicture = $("<td>");

        const orderImage = $("<img>").addClass("img-fluid");

        orderImage.attr("src", e.picture);

        const inputId = e.product_name.split(" ").join("");

        //Create <td> for product name
        const tdItem = $("<td>").addClass("product-name").text(e.product_name);

        //Create <td> for department name
        const tdDepartment = $("<td>").addClass("department-name").text(e.department_name);

        //Create <td> for Quantity
        const tdQuantity = $("<td>");

        //Create <input> for getting the input information
        const inputQuantity = $("<input>").addClass("quantity").attr("type", "number").attr("id", inputId).attr("placeholder", "0");

        //Append <input> to <td> for quantity
        tdQuantity.append(inputQuantity);

        //Add image to <td>
        tdPicture.append(orderImage);

        //Create <td> for price
        const tdPrice = $("<td>").addClass("price").text(e.price);

        //Append all <td> to <tr>
        tr.append(tdPicture);
        tr.append(tdDepartment);
        tr.append(tdItem);
        tr.append(tdQuantity);
        tr.append(tdPrice);

        //Append to <tbody>
        $("#order").append(tr);

    });


}

