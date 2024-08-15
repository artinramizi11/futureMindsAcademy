const container = document.querySelector('.container')

function getRandomColor() {
    const letters = '0123456879ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomPosition(maxWidth, maxHeight) {
    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);
    return { x, y };
}

function getRandomSize(maximumSize){
    return Math.floor(Math.random() * maximumSize) + 10;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    const size = getRandomSize(100); 
    const color = getRandomColor();
    const { x, y } = getRandomPosition(window.innerWidth, window.innerHeight);
    
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = color;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    container.appendChild(circle);
}

for (let i = 0; i < 300; i++) {
    createCircle();
}


container.addEventListener('click', function(e){
    const currentCircle = e.target;
    currentCircle.remove();
    console.log(e.target)
})
