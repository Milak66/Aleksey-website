const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    play();
    }
})

btn.addEventListener('click', play);

function play() {


const userNumber = input.value;

if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
        icon: 'error',
        title: "Ой",
        text: "Введите число от 1 до 20!"
    });
}
else if (isNaN(userNumber)) {
    Swal.fire({
       icon: 'error',
       title: "Ой",
       text: "Нужно ввести число!"
    });
} 
else {
    if (userNumber < answer) {
        Swal.fire('Введите цифру больше!', 'Компьютер пока побеждает!');
    }
    else if (userNumber > answer) {
        Swal.fire('Введите цифру меньше!', 'Компьютер пока побеждает!');
    }
    else {
        Swal.fire({
            title: 'Победа!!!',
            ImageUrl: 'https://i.ytimg.com/vi/UOv9iiMiF6A/maxresdefault.jpg',
            ImageWidth: 600,
            ImageHeight: 400,
            ImageAlt: 'Победа!',
        })
    }
}
}