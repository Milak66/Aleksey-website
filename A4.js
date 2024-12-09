const start = document.querySelector('.start');
const aboutAleksey = document.querySelector('.aboutAleksey');
const worksOfSite = document.querySelector('.worksOfSite');

start.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight / 100, 
        behavior: 'smooth' 
})
});

aboutAleksey.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight, 
        behavior: 'smooth' 
})
});

worksOfSite.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight * 2, 
        behavior: 'smooth' 
})
});