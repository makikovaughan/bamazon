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