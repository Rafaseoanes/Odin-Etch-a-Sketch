
const gridContainer = document.querySelector("#grid-container")



    for(let i = 0; i < 15; i++){
        const div = document.createElement("div")
        div.classList.add("row")
        gridContainer.append(div)
            for(let j = 0; j < 15; j++){
                const div2 = document.createElement("div")
                div.append(div2)
            }
    }
