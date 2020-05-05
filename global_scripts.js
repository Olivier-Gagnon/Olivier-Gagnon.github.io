$(document).ready(function () {

    // Handle Navbar
    $('#navbar-container').load("/components/navbar/navbar.html", function () {
        $.getScript("/components/navbar/navbar.js")
    });

    // Handle HomePage
    $('#section-container').load("/sections/home/home.html", function () {
    });

    // Handle Footer
    $('#footer-container').load("/components/footer/footer.html", function () {
    });

});