
const gridContainer = document.querySelector("#grid-container")
const clearBtn = document.querySelector("#clearBtn")
const gridSizeBtn = document.querySelector("#gridSizeBtn")

let gridSize = 16

document.addEventListener("DOMContentLoaded", function(){
    makeGrid()
    addFuntionality()
});

gridSizeBtn.addEventListener("click", function(){
    var userInput;

    while (true) {
        userInput = prompt("Please enter an integer between 4 and 80 (default is 16):") || '16';
    
        var parsedNumber = parseInt(userInput, 10);
    
        // Check if the input is a valid integer and within the specified range
        if (!isNaN(parsedNumber) && Number.isInteger(parsedNumber) && parsedNumber >= 4 && parsedNumber <= 80) {
            // Valid integer within the range provided
            break;
        } else {
            alert("Invalid input. Please enter a valid integer between 4 and 80.");
        }
    }
    
    gridSize = parsedNumber 
    resetGrid()
    makeGrid()
    addFuntionality()
})




function makeGrid(){
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div")
        div.classList.add("row")
        div.classList.add("pixelStyle")
        gridContainer.append(div)
        for (let j = 0; j < gridSize; j++) {
            const div2 = document.createElement("div")
            div2.classList.add("pixel")
            div2.classList.add("pixelStyle")
            div.append(div2)
        }
    }
}




function addFuntionality(){
    const pixels = document.querySelectorAll(".pixel");
    for (let pixel of pixels) {
        pixel.addEventListener("mouseover", function () {
            pixel.style.backgroundColor = "black"
        })
    }
}

clearBtn.addEventListener("click", clearGrid)

function clearGrid(){
    const pixels = document.querySelectorAll(".pixel");
    for (let pixel of pixels) {
        pixel.style.backgroundColor = "white"
    }
}

function resetGrid(){
    gridContainer.innerHTML =""
}