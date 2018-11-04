$(function () {

    $.ajax({
        method: "GET",
        url: "/api/product"
    }).then(function (response) {
        const productItem = response;
        console.log(productItem);

    }).catch(function (err) {
        
    });

});