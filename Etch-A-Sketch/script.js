function createDiv(numOfDivs){
    const container = document.querySelector("#container");
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat('+ numOfDivs + ', 20px)';
    console.log(container.style.gridTemplateColumns);
    container.style.gridTemplateRows = 'repeat('+ numOfDivs + ', 20px)';
    console.log(container.style.gridTemplateRows);
    for(let i=0; i<numOfDivs*numOfDivs; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('grid-item');
        // newDiv.innerHTML = "blank space";
        newDiv.style.backgroundColor = 'white';
        newDiv.style.border = "black solid 1px"
        newDiv.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = "yellow";
        });
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


createDiv(16);
clearGrid();