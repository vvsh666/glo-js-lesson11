const btn = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const circle = document.getElementById('circle');
const rangeSpan = document.getElementById('range-span')

const changeColor = function () {
    square.style.backgroundColor = inputText.value;
}

const changeDim = function () {
    rangeSpan.textContent = inputRange.value + '%'
    circle.style.width = inputRange.value + '%'
    circle.style.height = inputRange.value + '%'
}

const setRange = function () {
    let startPercent = 100 * circle.clientHeight / square.clientHeight;
    inputRange.value = startPercent;
    rangeSpan.textContent = inputRange.value + '%'
}

btn.addEventListener('click', changeColor);

eBtn.style.display = 'none';

setRange();

inputRange.addEventListener('input', changeDim)