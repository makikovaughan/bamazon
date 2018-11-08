const displaySale = function (productItems, displayTag) {

    displayTag.empty();


    productItems.forEach(e => {

        //Creating <tr>
        const tr = $("<tr>");

        //Creating <td> containing a product picture
        const tdPicture = $("<td>");

        const orderImage = $("<img>").addClass("img-fluid");

        orderImage.attr("src", e.picture);

        //Create <td> for product name
        const tdItem = $("<td>").addClass("product-name").text(e.product_name);

        //Create <td> for department name
        const tdDepartment = $("<td>").addClass("department-name").text(e.department_name);

        //Created the <input> ID based on the product name
        const inputId = e.product_name.split(" ").join("");

        //Create the input text for the stock. Placeholder is the current stock value
        const inputStock = $("<input>").addClass("stock mt-3").attr("type", "text").attr("id", inputId).attr("placeholder", e.stock_quantity);

        //Create <td> for Quantity
        const tdStock = $("<td>").addClass("stock").text(e.stock_quantity);


        //Add image to <td>
        tdPicture.append(orderImage);

        //Create <td> for price
        const tdPrice = $("<td>").addClass("price").text(e.price);

        //Append all <td> to <tr>
        tr.append(tdPicture);
        tr.append(tdDepartment);
        tr.append(tdItem);

        //If the add inventory, the stock is input tag
        if (displayTag[0].id === "addStock") {
            tr.append(inputStock);
        }
        //otherwise, it just displays it
        else {
            tr.append(tdStock);
        }
        tr.append(tdPrice);

        //Append to <tbody>
        displayTag.append(tr);

    });


}

const renderList = function () {

    $.ajax({
        method: "GET",
        url: "/api/products"
    }).then(function (response) {
        const productItems = response;
        const sales = $("#sale-item");
        displaySale(productItems, sales);
    }).catch(function (err) {
        console.log(err);
    });

}

//Get the low inventory
const getLowInventory = function () {

    $.ajax({
        method: "GET",
        url: "/api/sales"
    }).then(function (data) {
        const productItems = data;
        console.log("ProductItems", data);
        const lowInventory = $("#lowInventory-item");
        displaySale(productItems, lowInventory);
    }).catch(function (err) {
        console.log(err);
    });
}

const addInventory = function () {

    $.ajax({
        method: "GET",
        url: "/api/products"
    }).then(function (data) {
        const productItems = data;
        const addInventory = $("#addStock");
        displaySale(productItems, addInventory);
    }).catch(function (err) {
        console.log(err);
    });

}

//Get the inventory page
const displayPage = function () {
    $.ajax({
        method: "GET",
        url: "/api/products"
    }).then(function (response) {
        const productItem = response;
        orderDisplay(productItem);
    }).catch(function (err) {
        console.log(err);
    });
}

const renderManagerView = function () {

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";

    //Make add screen viewable
    $("#sales").addClass(statusActive);
    $("#sales").addClass(statusShow);

    //Make the rest of screen faded(not viewable)
    $("#home").removeClass(statusShow);
    $("#home").removeClass(statusActive);
    $("#lowInventory").removeClass(statusShow);
    $("#lowInventory").removeClass(statusActive);
    $("#addInventory").removeClass(statusShow);
    $("#addInventory").removeClass(statusActive);
    $("#addNewOrder").removeClass(statusShow);
    $("#addNewOrder").removeClass(statusActive);

    renderList();


}

const renderLowInventoryView = function () {

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";

    //Display the low inventory page
    $("#lowInventory").addClass(statusShow);
    $("#lowInventory").addClass(statusActive);


    //Make the rest of screen faded(not viewable)
    $("#home").removeClass(statusShow);
    $("#home").removeClass(statusActive);
    $("#sales").removeClass(statusActive);
    $("#sales").removeClass(statusShow);
    $("#addInventory").removeClass(statusShow);
    $("#addInventory").removeClass(statusActive);
    $("#addNewOrder").removeClass(statusShow);
    $("#addNewOrder").removeClass(statusActive);

    getLowInventory();

}

const renderAddInventoryView = function () {

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";

    //Display the low inventory page
    $("#addInventory").addClass(statusShow);
    $("#addInventory").addClass(statusActive);

    //Make other screens not viewable
    $("#sales").removeClass(statusActive);
    $("#sales").removeClass(statusShow);
    $("#home").removeClass(statusShow);
    $("#home").removeClass(statusActive);
    $("#lowInventory").removeClass(statusShow);
    $("#lowInventory").removeClass(statusActive);
    $("#addNewOrder").removeClass(statusShow);
    $("#addNewOrder").removeClass(statusActive);

    addInventory();
}

const renderAddNewOrder = function () {

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";

    //Display the low inventory page
    $("#addNewOrder").addClass(statusShow);
    $("#addNewOrder").addClass(statusActive);

    //Make other screens not viewable
    $("#sales").removeClass(statusActive);
    $("#sales").removeClass(statusShow);
    $("#home").removeClass(statusShow);
    $("#home").removeClass(statusActive);
    $("#lowInventory").removeClass(statusShow);
    $("#lowInventory").removeClass(statusActive);
    $("#addInventory").removeClass(statusShow);
    $("#addInventory").removeClass(statusActive);

}

const renderCustomerView = function () {

    //Make the view screen viewable
    const statusShow = "show";
    const statusActive = "active";

    $(".quantity").val("");

    //Make add screen viewable
    $("#home").addClass(statusShow);
    $("#home").addClass(statusActive);

    //Make the rest of screen faded(not viewable)
    $("#sales").removeClass(statusActive);
    $("#sales").removeClass(statusShow);
    $("#lowInventory").removeClass(statusShow);
    $("#lowInventory").removeClass(statusActive);
    $("#addInventory").removeClass(statusShow);
    $("#addInventory").removeClass(statusActive);
    $("#addNewOrder").removeClass(statusShow);
    $("#addNewOrder").removeClass(statusActive);

    displayPage();

}


const changeScreen = function () {

    //Make the screen viewable based on what is clicked on the left screen
    if (this.text === "Manager" || this.text === "View for Sale") {

        //Displays the manager view
        renderManagerView();
    }
    else if (this.text === "View Low Inventory") {

        renderLowInventoryView();

    }
    else if (this.text === "Add to Inventory") {
        renderAddInventoryView();
    }
    else if (this.text === "Add New Order") {
        renderAddNewOrder();
    }
    else {
        renderCustomerView();
    }
}