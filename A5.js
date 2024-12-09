const slider = document.querySelector('.slider');
const containerOfSlides = document.querySelector('.containerOfSlides');
const slides = document.querySelectorAll('.slide');
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const width = window.getComputedStyle(slider).width;
const height = window.getComputedStyle(slider).height;
const big = document.querySelector('.big');
const small = document.querySelector('.small');

let slideIndex = 1;

slides.forEach(slide => {
    slide.style.width = width;
});

slides.forEach(slide => {
    slide.style.height = height;
});

showSlide(slideIndex);

function showSlide(a) {
    if (a > slides.length) {
        slideIndex = 1;
    }
    if (a < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(item => {
        item.style.display = 'none';
    })
    slides[slideIndex - 1].style.display = 'block';
    big.textContent = `0${slideIndex}`;
}

function plusSlides(i) {
    showSlide(slideIndex += i)
}
next.addEventListener('click', () => {
    plusSlides(1);
});
back.addEventListener('click', () => {
    plusSlides(-1);
});