//apuntar a inputs
const pixeles = document.querySelector("#pixeles");
const colors = document.querySelector("#color");
const lienzo = document.querySelector(".lienzo-continer");
const main = document.querySelector(".main-continer");


function setupGrid(size) {
    lienzo.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    lienzo.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');    
        gridElement.classList.add('pixelStyle');
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
    let padre = document.getElementById('idLienzo');
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
    setupGrid(size)
};
const setColor = (color) => {
    let padre = document.getElementById('idLienzo');
    let hijos = padre.querySelectorAll('div');
    for (let i = 0; i < hijos.length; i++) {
        hijos[i].addEventListener('mouseenter', function(event) {
            if (event.buttons === 1) {
                hijos[i].setAttribute('style', `background: ${color};`);
            }
        });
    }
};

colors.addEventListener('change', function(event) {
    const selectedColor = event.target.value; // Obtener el valor seleccionado // Mostrar el valor en la consola (puedes realizar otras acciones con el valor)
    setColor(selectedColor);
});
pixeles.addEventListener('change', gridSize);
window.onload = () => {
    setupGrid(16)
}




