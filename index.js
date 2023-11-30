//apuntar a inputs
const pixeles = document.querySelector("#pixeles");
const lienzo = document.querySelector(".lienzo-continer");
const main = document.querySelector(".main-continer");


function setupGrid(size) {
    lienzo.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    lienzo.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');    
        gridElement.classList.add('pixelStyle')
        lienzo.appendChild(gridElement)
    }
}

const gridSize = (size) => {
    size = pixeles.value;
    let padre = document.getElementById('idLienzo');
    while (padre.firstChild) {
    padre.removeChild(padre.firstChild);
    }
    setupGrid(size)
};

pixeles.addEventListener('change', gridSize);
window.onload = () => {
    setupGrid(16)
}




