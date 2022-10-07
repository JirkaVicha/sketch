
// Create a grid, each square is 16 x 16 px of size
function makeBox(num) {
    for (let i = 1; i < num; i++) {
        const grid = document.createElement('div');
        const container = document.getElementById('container');
        container.appendChild(grid).className = 'square';
        };
    };

makeBox(1422);

// Create hovering over the boxes and leave them pixelated
const box = document.getElementsByClassName('square');

// Start button to inicialized the game
const startBtn = document.getElementsByClassName('black-paint')[0];
startBtn.addEventListener('click', blackPaint);

// Start button to inicialized color painting
const colorBtn = document.getElementsByClassName('btn-colors')[0];
colorBtn.addEventListener('click', paintColor);

function blackPaint() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', () => mouseOver(box[i]));
        box[i].addEventListener('mouseout', () => mouseOut(box[i]));
    };
};

function mouseOver(box) {
    // box.style.backgroundColor = makeColor(); // randomly changed color
    box.style.backgroundColor = 'black'; // only one colored pen
};

function mouseOut(box) {
    // box.style.backgroundColor = makeColor(); // randomly changed color
    box.style.backgroundColor = 'black'; // only one colored pen
};

function paintColor() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', () => colorOver(box[i]));
        box[i].addEventListener('mouseout', () => colorOut(box[i]));
    };
};

function colorOver(box) {
    box.style.backgroundColor = makeColor(); // randomly changed color  
};

function colorOut(box) {
    box.style.backgroundColor = makeColor(); // randomly changed color
};

// Create random RGB color
function makeColor() {
    const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomColor(0, 255);
    const g = randomColor(0, 255);
    const b = randomColor(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
};



// End painting by reload trhe page and start again
const resetBtn = document.getElementsByClassName('btn-reset')[0];
resetBtn.addEventListener('click', resetPaint);

function resetPaint() {
    location.reload();
};
