var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--open');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--open');
    }
});



var popup = document.querySelector(".popup-login");
var closePP = popup.querySelector(".login__close");
var form = popup.querySelector(".login__form");
var reg = document.querySelector(".main-nav__user-login");
var regReviews = document.querySelector(".reviews__write");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

reg.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("popup-login__show");
    popup.classList.add("popup__login-animation");
})

regReviews.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("popup-login__show");
    popup.classList.add("popup__login-animation");
})

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("popup__login-animation");
        popup.classList.add("popup__login-error");
        setTimeout(function() {
            popup.classList.remove("popup__login-error");
        }, 500);
    }
    else {
        localStorage.setItem("login", login.value);
    }
})

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-login__show")) {
            popup.classList.remove("popup-login__show");
            overlay.classList.remove("overlay-show");
            popup.classList.remove("popup__login-animation");
        }
    }
})

closePP.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("popup-login__show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("popup__login-animation");
})
