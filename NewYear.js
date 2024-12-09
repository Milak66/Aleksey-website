function christmasCoutdown() {
    const christmasDate = new Date('December 31, 2024 00:00');
    const now = new Date ();
    const diff = christmasDate - now;
   
   
    const msInSecond =  1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;


    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('.days').textContent = displayDay;
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;


    if(diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timer);
        marryChristmas();
    }
}
const timer = setInterval(christmasCoutdown, 1000);
function marryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Новый год наступил! ура!';
    heading.classList.add('red');
}
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    document.querySelector('#myAudio').play();
})