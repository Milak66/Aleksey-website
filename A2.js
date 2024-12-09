const targetDiv = document.querySelector('#targetDiv');
const leftDiv = document.querySelector('#leftDiv');
const rightDiv = document.querySelector('#rightDiv')

window.addEventListener('scroll', () => {
  const rect = targetDiv.getBoundingClientRect();
  const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isVisible) {
    leftDiv.classList.add('leftDiv');
    rightDiv.classList.add('rightDiv');
  }
});
const targetDiv2 = document.querySelector('#targetDiv2');
const leftDiv2 = document.querySelector('#leftDiv2');
const rightDiv2 = document.querySelector('#rightDiv2')

window.addEventListener('scroll', () => {
  const rect = targetDiv2.getBoundingClientRect();
  const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isVisible) {
    leftDiv2.classList.add('leftDiv2');
    rightDiv2.classList.add('rightDiv2');
  }
});