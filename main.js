// Function to change grid size dynamically
function createGrid(rows, cols) {
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
    const boxSize = (800/cols);
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



createGrid(16, 16);