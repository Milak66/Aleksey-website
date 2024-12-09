const inputA = document.querySelector('.inputA');
const inputB = document.querySelector('.inputB');
const selectOf = document.querySelector('.selectOf');
const btn = document.querySelector('.btn');
const resultAAndB = document.querySelector('.resultAAndB');

btn.addEventListener('click', function() {
    const a = Number(inputA.value);
    const b = Number(inputB.value);
    const operation = selectOf.value;
    const result = calculate({ a, b, operation})
    resultAAndB.innerHTML = result
})