// Function to change grid size dynamically
function createGrid(rows=16, cols=16) {
    // Target big container
    const bigCon = document.getElementById("big-con");
    // Clear existing grid
    bigCon.innerHTML = "";

    // Loop to create grid with specified dimensions
    for (let i=0; i < rows*cols; i++) {
        smallDiv = document.createElement("div");
        smallDiv.className = "grid-box";
        bigCon.appendChild(smallDiv);
    }

    // Update CSS for .grid-box items
    const boxSize = (600/cols);
    const smallBox = document.querySelectorAll(".grid-box");
    smallBox.forEach((box) => {
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
    });

    colorGrid();
    
};

// Function to add colors to grid-boxes when clicked.
function colorGrid() {
    // Target small boxes to loop through each one and add an event listener
    const smallBoxMouse = document.querySelectorAll(".grid-box");
    // Used as a flagging point or checkpoint
    let isDrawing = false;

    for (let box of smallBoxMouse) {
        box.addEventListener("mousedown", function() {
            isDrawing = true;
            box.style.backgroundColor = "black";
        })

        box.addEventListener("mousemove", function () {
            if (isDrawing) {
                box.style.backgroundColor = "black";
            }
        })

        box.addEventListener("mouseup", function() {
            if (isDrawing) {
                isDrawing = false;
            }
        })
    }
}

// Buttons
const buttons = document.getElementById("buttons");

const buttonSelection = ["Eraser", "Reset"];

buttonSelection.forEach((button) => {
    // Create buttons
    let selections = document.createElement("button");
    selections.textContent = button;
    selections.className = "selections";
    buttons.append(selections);
    btns(selections);
})

// Button logic WIP
function btns(slct) {
    if (slct.textContent == "Reset") {
        slct.addEventListener("click", function() {
            resetGrid = document.querySelectorAll(".grid-box");
            createGrid();
            gridSlider.value = 16;
            gridValue.innerHTML = "Grid size: " + gridSlider.value + "px";
            for (let box of resetGrid) {
                box.style.backgroundColor = null;
            }
        })
    } else {
        slct.addEventListener("click", function() {
            eraserBtn(slct);
        })
    }
}


// Grid range slider
const sliderDiv = document.createElement("div");
sliderDiv.setAttribute("id", "sliderCon");
sliderDiv.setAttribute("class", "selections");
buttons.append(sliderDiv);

const gridSlider = document.createElement("input");
gridSlider.id = "slider";
const gridValue = document.createElement("p");
sliderDiv.append(gridSlider);
sliderDiv.append(gridValue);

gridSlider.setAttribute("type", "range");
gridSlider.setAttribute("value", "16");
gridSlider.setAttribute("min", "1");
gridSlider.setAttribute("max", "64");

//Displays slider value
gridValue.innerHTML = "Grid size: " + gridSlider.value + "px";

gridSlider.addEventListener("input", function() {
    gridValue.innerHTML = "Grid size: " + this.value + "px";
    let gridSize = parseInt(this.value);
    createGrid(gridSize,gridSize);
})



// Creates grid
createGrid();