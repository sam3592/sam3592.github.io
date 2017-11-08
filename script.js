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
document.getElementById("date").innerHTML= d.toLocaleDateString();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}