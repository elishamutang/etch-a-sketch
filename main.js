// Function to change grid size dynamically
function createGrid(rows=16, cols=16, color) {
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

    // If color was chosen, don't reset it to black.
    if (color) {
        colorGrid(color);
    } else {
        colorGrid();
    }
};

// Function to add colors to grid-boxes when clicked. Default color set to black.
function colorGrid(color="#000000") {

    const smallBox = document.querySelectorAll(".grid-box");
    // Used as a flagging point or checkpoint
    let isDrawing = false;

    for (let box of smallBox) {
        box.addEventListener("mousedown", function() {
            isDrawing = true;
            if (color == "RGB") {
                box.style.backgroundColor = randomRGB();
            } else {
                box.style.backgroundColor = color;
            }
        })

        box.addEventListener("mousemove", function () {
            if (isDrawing) {
                if (color == "RGB") {
                    box.style.backgroundColor = randomRGB();
                } else {
                    box.style.backgroundColor = color;
                }
            }
        })

        box.addEventListener("mouseup", function() {
            if (isDrawing) {
                isDrawing = false;
            }
        })
    }
}

// Eraser function
function eraserBtn() {

    const smallBox = document.querySelectorAll(".grid-box");

    let eraserOn = false;

    for (let box of smallBox) {
        box.addEventListener("mousedown", function() {
            eraserOn = true;
            box.style.backgroundColor = null;
        })

        box.addEventListener("mousemove", function () {
            if (eraserOn) {
                box.style.backgroundColor = null;
            }
        })

        box.addEventListener("mouseup", function() {
            if (eraserOn) {
                eraserOn = false;
            }
        })
    }
}

// Button logic WIP
function btns(slct) {
    if (slct.textContent == "Clear") {
        slct.addEventListener("click", function() {
            resetGrid = document.querySelectorAll(".grid-box");
            for (let box of resetGrid) {
                box.style.backgroundColor = null;
            }
        })
    } else if(slct.textContent == "Eraser") {
        slct.addEventListener("click", function() {
            eraserBtn();
        })
    } else if(slct.textContent == "Color") {
        slct.addEventListener("input", function(event) {
            colorGrid(event.target.value);
        })
    } else {
        slct.addEventListener("click", function(event) {
            colorGrid(event.target.textContent);
        })
    }
}

// Randomise RGB values
function randomRGB() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    let rgbRandom = `rgb(${r},${g},${b})`;
    return rgbRandom;
}

// Buttons
const buttons = document.getElementById("buttons");

const buttonSelection = ["Eraser", "Clear", "Color", "RGB"];

buttonSelection.forEach((button) => {
    // Create buttons
    let selections = document.createElement("button");
    selections.textContent = button;
    selections.id = button;
    selections.className = "selections";
    buttons.append(selections);
    btns(selections);
})

// Color input to be appended to color button.
const colorInput = document.createElement("input");
colorInput.setAttribute("type", "color");
colorInput.setAttribute("id", "colorPicker");
colorInput.setAttribute("value", "#000000");
document.getElementById("Color").append(colorInput);

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

// Displays slider value
gridValue.innerHTML = "Grid size: " + gridSlider.value + "px";

gridSlider.addEventListener("input", function() {
    gridValue.innerHTML = "Grid size: " + this.value + "px";
    let gridSize = parseInt(this.value);
    createGrid(gridSize, gridSize, colorInput.value);
})


// Creates grid
createGrid();