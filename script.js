
// Create a grid, each square is 16 x 16 px of size
function makeBox(num) {
    for (let i = 1; i < num; i++) {
        const grid = document.createElement('div');
        const container = document.getElementById('container');
        container.appendChild(grid).className = 'square';
        };
    };

makeBox(2624);

// Create hovering over the boxes
