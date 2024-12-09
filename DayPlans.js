const inputCheck = document.querySelector('.inputCheck');
const btn = document.querySelector('.btn');
const toDoConteaner = document.querySelector('.toDoConteaner');

btn.addEventListener('click', () => {
    const item = document.createElement('li');
    item.innerText = inputCheck.value;
    item.classList.add('toDoAdded');
    toDoConteaner.appendChild(item);
    inputCheck.value = '';
    
    item.addEventListener('click', () => {
    item.classList.add('toDoCompleted');
        
        
    item.addEventListener('dblclick', () => {
    toDoConteaner.removeChild(item);
})
})
})