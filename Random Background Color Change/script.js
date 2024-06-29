const bgColor = document.querySelector('.bg-color');

let colorCode = 'ABCDEF0123456789';

function getRandomColor(code) {

    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)];
    }
    bgColor.style.cssText = `transition:all 1s ease-in-out; background:${color}`;
}


setInterval(() => {
    getRandomColor(colorCode)
}, 1000);