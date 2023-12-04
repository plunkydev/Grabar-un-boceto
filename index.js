//apuntar a inputs
const pixeles = document.querySelector("#pixeles");
const colors = document.querySelector("#color");
const lienzo = document.querySelector(".lienzo-continer");
const main = document.querySelector(".main-continer");
let random = '';

const isRandom = () => {
    random = 'activo';
    setColor(random);
}

function setupGrid(size) {
    lienzo.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    lienzo.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');    
        lienzo.appendChild(gridElement);
        gridElement.addEventListener('mouseenter', function(event) {
            if (event.buttons === 1) {
                gridElement.classList.add("black")
            }
        });
    }
}

const gridSize = (size) => {
    size = pixeles.value;
    colors.value = "#000000";
    let padre = document.getElementById('idLienzo');
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
    setupGrid(size)
};
const setColor = (color) => {
    if(color === "#fff") { // esta condicion es activada pora el borrador
        color = "#fff"
    }
    let padre = document.getElementById('idLienzo');
    let hijos = padre.querySelectorAll('div');
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].addEventListener('mouseenter', function(event) {
            if (event.buttons === 1) {
                if (color === "activo") {
                    let h = Math.floor(Math.random() * 331);
                    hijos[i].setAttribute('style', `background: hsl(${h}, 75%, 50%);`);
                } else {
                    hijos[i].setAttribute('style', `background: ${color};`);
                }
            }
        });
    }
};

colors.addEventListener('change', function(event) {
    const selectedColor = event.target.value; 
    setColor(selectedColor);
});
pixeles.addEventListener('change', gridSize);
window.onload = () => {
    setupGrid(33)
}