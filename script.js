
const gridContainer = document.querySelector("#grid-container")
const clearBtn = document.querySelector("#clearBtn")


for (let i = 0; i < 16; i++) {
    const div = document.createElement("div")
    div.classList.add("row")
    div.classList.add("pixelStyle")
    gridContainer.append(div)
    for (let j = 0; j < 16; j++) {
        const div2 = document.createElement("div")
        div2.classList.add("pixel")
        div2.classList.add("pixelStyle")
        div.append(div2)
    }
}

const pixels = document.querySelectorAll(".pixel");

for (let pixel of pixels) {
    pixel.addEventListener("mouseover", function () {
        pixel.style.backgroundColor = "black"
    })
}

clearBtn.addEventListener("click", function () {

    for (let pixel of pixels) {
        pixel.style.backgroundColor = "white"
    }
})