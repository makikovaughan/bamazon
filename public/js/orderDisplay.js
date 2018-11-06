const orderDisplay = function (productItem) {

    //Creating a <tbody>
    const tbody = $("<tbody>");



    productItem.forEach(e => {

        //Creating <tr>
        const tr = $("<tr>");


        //Creating <td> containing a product picture
        const tdPicture = $("<td>");

        const orderImage = $("<img>").addClass("img-fluid")

        switch (e.product_name) {

            case "Movado Mens Bold Watch":
                orderImage.attr("src", "../images/movadoMensWatch.jpg");
                break;
            case "Coach Womens Tristen Signature Stainless Bracelet Glitz Watch":
                orderImage.attr("src", "../images/coachWatch.jpg");
                break;
            case "Movado Womens Bold Watch":
                orderImage.attr("src", "../images/movadoWomenWatch.jpg");
                break;
            case "R2D2 with Antlers Collectible Figure":
                orderImage.attr("src", "../images/R2D2.jpg");
                break;
            case "Mamma Mia! Here We Go Again":
                orderImage.attr("src", "../images/mamamia.jpg");
                break;
            case "The Lord of the Rings: The Motion Picture Trilogy":
                orderImage.attr("src", "../images/lord.jpg");
                break;
            case "The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia":
                orderImage.attr("src", "../images/narnia.jpg");
                break;
            case "Harry Potter Paperback Box Set (Books 1-7)":
                orderImage.attr("src", "../images/harry.jpg");
                break;
            case "MacBook Pro":
                orderImage.attr("src", "../images/macbook.jpg");
                break;
            case "iPad Pro":
                orderImage.attr("src", "../images/ipad.jpg");
                break;

        }

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

