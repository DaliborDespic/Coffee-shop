// HAMBURGER
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const lines = document.querySelectorAll('.line');
const navbarLinks = document.querySelectorAll('.navbar__link');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
    lines.forEach(line => line.classList.toggle('transform'));
})

navbarLinks.forEach(link => link.addEventListener('click', () => {
    navbar.classList.remove('show');
    lines.forEach(line => line.classList.remove('transform'));
}))


//REVIEW SLIDER
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.slider__btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
let manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 3000);
    }
    repeater();
}
repeat();