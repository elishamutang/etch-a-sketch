// Target big container
const bigCon = document.getElementById("big-con");
// Used as a flagging point or checkpoint
let isDrawing = false;

// Loop to create 256 small boxes within 16x16 grid
for (let i=1; i < 257; i++) {
    smallDiv = document.createElement("div");
    smallDiv.className = "small-con";
    bigCon.appendChild(smallDiv);
}

// Target small boxes to loop through each one and add an event listener
const smallBox = document.querySelectorAll(".small-con");

for (let box of smallBox) {
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