const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');
const thx = document.querySelector('.thx');
const remove = document.querySelector('.remove');

star1.addEventListener('click', () => {
    star1.classList.toggle('goldStar');
    star2.classList.remove('goldStar');
    star3.classList.remove('goldStar');
    star4.classList.remove('goldStar');
    star5.classList.remove('goldStar');
    thx.textContent = " Вам нравится сайт?";
    remove.textContent = "Оцените его!";
})

star2.addEventListener('click', () => {
    star1.classList.add('goldStar');
    star2.classList.toggle('goldStar');
    star3.classList.remove('goldStar');
    star4.classList.remove('goldStar');
    star5.classList.remove('goldStar');
    thx.textContent = " Вам нравится сайт?";
    remove.textContent = "Оцените его!";
})

star3.addEventListener('click', () => {
    star1.classList.add('goldStar');
    star2.classList.add('goldStar');
    star3.classList.toggle('goldStar');
    star4.classList.remove('goldStar');
    star5.classList.remove('goldStar');
    thx.textContent = " Вам нравится сайт?";
    remove.textContent = "Оцените его!";
})

star4.addEventListener('click', () => {
    star1.classList.add('goldStar');
    star2.classList.add('goldStar');
    star3.classList.add('goldStar');
    star4.classList.toggle('goldStar');
    star5.classList.remove('goldStar');
    thx.textContent = " Вам нравится сайт?";
    remove.textContent = "Оцените его!";
})

star5.addEventListener('click', () => {
    star1.classList.add('goldStar');
    star2.classList.add('goldStar');
    star3.classList.add('goldStar');
    star4.classList.add('goldStar');
    star5.classList.toggle('goldStar');
    thx.textContent = "Вау, так много звёзд!";
    remove.textContent = "";
})