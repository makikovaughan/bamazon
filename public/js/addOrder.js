const addOrder = function (e) {

    //Avoid reset
    e.preventDefault();

    // Get the stock information
    // const stockTag = $('tbody tr');

    const stockTag = document.querySelectorAll('tbody tr');

    const newOrder = [];

    console.log("Stock tag",stockTag);

    //Get the stock information to add to the array of Object(Orders)
    stockTag.forEach(function (row) {

        const stockData = row.querySelectorAll("td");

        console.log("Stock:" , stockData);

        const stockQuantity = stockData[3].childNodes[0].value;

        console.log("Stock QTY:", stockQuantity);

    });
}