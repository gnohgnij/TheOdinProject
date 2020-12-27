function createDiv(numOfDivs){
    const container = document.querySelector("#container");
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat('+ numOfDivs + ', ' + 400/numOfDivs + 'px)';
    container.style.gridTemplateRows = 'repeat('+ numOfDivs + ', ' + 400/numOfDivs + 'px)';
    for(let i=0; i<numOfDivs*numOfDivs; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('grid-item');
        // newDiv.innerHTML = "blank space";
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
        let choice = prompt("Select number of pixels from 16 to 100");
        if(Number(choice) >= 16 && Number(choice) <= 100){
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(item => item.remove());
            createDiv(Number(choice));
            setColor();
        }
        else{
            alert("Value must be from 16 to 100");
        }
    })
}

function setColor(){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => item.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = color;
    }));
}

createDiv(16); //default grid size

let color = "black"; //default color

setColor();

clearGrid();

changePixels();