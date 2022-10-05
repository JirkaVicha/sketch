
// Create a grid, each square is 16 x 16 px of size
function makeBox(num) {
    for (let i = 1; i < num; i++) {
        const grid = document.createElement('div');
        const container = document.getElementById('container');
        container.appendChild(grid).className = 'square';
        };
    };

makeBox(2624);

// Create hovering over the boxes and leave them pixelated
const box = document.getElementsByClassName('square');

function mouseOver(box) {
    box.style.backgroundColor = makeColor();
};

function mouseOut(box) {
    box.style.backgroundColor = makeColor();
};


for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseover', () => mouseOver(box[i]));
    box[i].addEventListener('mouseout', () => mouseOut(box[i]));
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

