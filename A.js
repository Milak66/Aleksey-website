const text = 'Добро пожаловать';
let i = 0;
const speed = 100;
function gretting() {
    if (i < text.length) {
        document.querySelector('#sayHelloToUser').textContent += text.charAt(i);
        i++
        setTimeout(gretting, speed);
    }
};
gretting();

const modalContainer = document.getElementById('modal');
const goodSite = document.querySelector('#goodSite')
const closeModalButton = document.getElementById('close-modal');
const modalGood = document.querySelector('#modal-good');
const closeGoodModal = document.querySelector('#close-goodModal');

// setTimeout(() => {
//     modalContainer.style.display = 'flex';
//     document.body.classList.add('modal-open');
// }, 5000);

goodSite.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    modalGood.style.display = 'flex';
})

closeGoodModal.addEventListener('click', () => {
    modalGood.style.display = 'none';
    document.body.classList.remove('modal-open');
})

closeModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    document.body.classList.remove('modal-open');
});