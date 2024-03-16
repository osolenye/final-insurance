document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    let isOpened = false;
    if (window.innerWidth <= 800) {
        navbar.style.display = "none";
        isOpened = false;
    }
    var open_navbar = document.querySelector(".open_navbar");
    open_navbar.addEventListener("click", function (event) {
        event.preventDefault();
        if (window.innerWidth <= 800) {
            if (isOpened == false) {
                navbar.style.display = "flex";
                console.log(navbar);
                isOpened = true;
            } else {
                navbar.style.display = "none";
                isOpened = false;
            }
        }
    });
});
