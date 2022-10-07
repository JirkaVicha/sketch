
// Create a grid, each square is 16 x 16 px of size
function makeGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i < gridArea; i++) {
        const grid = document.createElement('div');
        const container = document.getElementById('container');
        container.appendChild(grid).className = 'square';
        };
    };

makeGrid(42);

// Find every box on the page.
const box = document.getElementsByClassName('square');

// Push button to paint in black color.
const startBtn = document.getElementsByClassName('black-paint')[0];
startBtn.addEventListener('click', blackPaint);

// Push button to paint in color.
const colorBtn = document.getElementsByClassName('btn-colors')[0];
colorBtn.addEventListener('click', paintColor);

// Function for painting in black.
function blackPaint() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', () => mouseOver(box[i]));
        box[i].addEventListener('mouseout', () => mouseOut(box[i]));
    };
};

// Hover function to paint in black when mouse is over boxes. 
function mouseOver(box) {
    box.style.backgroundColor = 'black'; // only one color
};

// Hover function to paint in black when mouse is mmoving out of boxes.
function mouseOut(box) {
    box.style.backgroundColor = 'black'; // only one color
};


// Function to paint in color.
function paintColor() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', () => colorOver(box[i]));
        box[i].addEventListener('mouseout', () => colorOut(box[i]));
    };
};

// Hover function to paint in color when mouse is over boxes.
function colorOver(box) {
    box.style.backgroundColor = makeColor(); // randomly changed color  
};

// Hover function to paint in color when mouse is mmoving out of boxes.
function colorOut(box) {
    box.style.backgroundColor = makeColor(); // randomly changed color
};

// Creating random RGB color
function makeColor() {
    const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomColor(0, 255);
    const g = randomColor(0, 255);
    const b = randomColor(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
};

// End painting by reload the page and make canvas empty.
const resetBtn = document.getElementsByClassName('btn-reset')[0];
resetBtn.addEventListener('click', resetPaint);

function resetPaint() {
    location.reload();
};
