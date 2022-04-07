const btn = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const inputRange = document.getElementById('range');
const circle = document.getElementById('circle');

const changeColor = function () {
    square.style.backgroundColor = inputText.value;
}

const changeDim = function () {
    circle.style.width = inputRange.value + '%'
    circle.style.height = inputRange.value + '%'
}

btn.addEventListener('click', changeColor);

eBtn.style.display = 'none';

inputRange.addEventListener('input', changeDim)