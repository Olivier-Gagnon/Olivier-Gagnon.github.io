$(document).ready(function () {

    // Handle Navbar
    $('#navbar-container').load("/components/navbar/navbar.html", function () {
        $.getScript("/components/navbar/navbar.js")});

    // Handle HomePage
    $('#section-container').load("/sections/home/home.html", function () {
        $.getScript("/sections/home/home.js")});

    // Handle Footer
    $('#footer-container').load("/components/footer/footer.html", function () {
        $.getScript("/components/footer/footer.js")});

});
