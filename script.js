//Javscript COde

//Comment form requirements
function validateForm() {
    var x = document.forms["comment"]["firstname", "lastname", "useremail"].value;
    if (x == "") {
        alert("Please fill out all applicable fields");
        return false;
    }
}


//Date on pages
var d = new Date();
