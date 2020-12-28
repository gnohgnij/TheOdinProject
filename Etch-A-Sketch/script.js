function createDiv(numOfDivs){
    const container = document.querySelector("#container");
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat('+ numOfDivs + ', ' + HEIGHT/numOfDivs + 'px)';
    container.style.gridTemplateRows = 'repeat('+ numOfDivs + ', ' + LENGTH/numOfDivs + 'px)';
    for(let i=0; i<numOfDivs*numOfDivs; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('grid-item');
        newDiv.style.backgroundColor = 'white';
        newDiv.style.border = "black solid 1px"
        container.appendChild(newDiv);
    }
}


function clearGrid(){
    const clear = document.querySelector('#clear');
    const gridItems = document.querySelectorAll('.grid-item');
    clear.addEventListener("click", function(){
        gridItems.forEach(item => item.style.backgroundColor = "white");
    })
}


function changePixels(){
    const pixels = document.querySelector("#change-pixels");
    pixels.addEventListener("click", function(){
        let choice = prompt("Select number of pixels per side, up to 100");
        if(Number(choice) > 0 && Number(choice) <= 100){
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(item => item.remove());
            createDiv(Number(choice));
        }
        else if(Number(choice) > 100){
            alert("Value must be below of equal to 100");
        }
        else if(Number(choice) < 1){
            alert("Value must be at least 1");
        }
    })
}

function mouseOverColor(color){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(grid => grid.addEventListener("mouseover", function(e){
        if(color == "rainbow"){
            let r = Math.floor(Math.random() * (256 - 0) + 0);
            let b = Math.floor(Math.random() * (256 - 0) + 0);
            let g = Math.floor(Math.random() * (256 - 0) + 0);
            console.log(r);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        e.target.style.backgroundColor = color;
    }));
}

function changeColor(){
    const colorBtns = document.querySelectorAll('.color-button');
    let color = "";
    colorBtns.forEach(button => button.addEventListener("click", function(e){
        if(e.target.id == "black-color"){
            color = "black";
        }
        else if(e.target.id == "rainbow-color"){
            color = "rainbow";
        }
        mouseOverColor(color);
    }));
}

const HEIGHT = 400;
const LENGTH = 400;

createDiv(16); //default grid size

changeColor(); //changes pixel color

clearGrid(); //clears grid on button click

changePixels(); //changes the number of pixels in the container

