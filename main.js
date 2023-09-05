const bigCon = document.getElementById("big-con");
let isDrawing = false;

for (let i=1; i < 257; i++) {
    smallDiv = document.createElement("div");
    smallDiv.className = "small-con";
    bigCon.appendChild(smallDiv);
}

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