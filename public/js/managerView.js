const displaySale = function(productItems){

    //Creating a <tbody>
    const tbody = $("<tbody>");



    productItems.forEach(e => {

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
        const tdStock= $("<td>").addClass("stock").text(e.stock_quantity);

        //Add image to <td>
        tdPicture.append(orderImage);

        //Create <td> for price
        const tdPrice = $("<td>").addClass("price").text(e.price);

        //Append all <td> to <tr>
        tr.append(tdPicture);
        tr.append(tdDepartment);
        tr.append(tdItem);
        tr.append(tdStock);
        tr.append(tdPrice);

        //Append to <tbody>
        $("#sale-item").append(tr);

    });


}

const renderList = function(){

    $.ajax({
        method: "GET",
        url: "/api/products"
    }).then(function (response) {
        const productItems = response;
        displaySale(productItems);
    }).catch(function (err) {
        console.log(err);
    });

}


const renderManagerView = function(){

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";
    
    //Make add screen viewable
    $("#v-dropdown-manager").addClass(statusActive);
    $("#v-dropdown-manager").addClass(statusShow);

    //Make the rest of screen faded(not viewable)
    $("#v-dropdown-all").removeClass(statusShow);
    $("#v-dropdown-all").removeClass(statusActive);

    renderList();
}

const renderCustomerView = function(){

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";
    
    //Make add screen viewable
    $("#v-dropdown-all").addClass(statusShow);
    $("#v-dropdown-all").addClass(statusActive);

    //Make the rest of screen faded(not viewable)
    $("#v-dropdown-manager").removeClass(statusActive);
    $("#v-dropdown-manager").removeClass(statusShow);


}


const changeScreen = function () {

    //Make the screen viewable based on what is clicked on the left screen
    if (this.text === "Manager" || this.text === "View for Sale") {

        //Displays the manager view
        renderManagerView();
    }
    else {
        renderCustomerView();
    }
}