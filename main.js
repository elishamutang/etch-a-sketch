const bigCon = document.getElementById("big-con");


for (let i=1; i < 257; i++) {
    smallDiv = document.createElement("div");
    smallDiv.className = "small-con";
    bigCon.appendChild(smallDiv);
}

const smallBox = document.querySelectorAll(".small-con");

for (let box of smallBox) {
    box.addEventListener("click", function() {
        box.style.backgroundColor = "black";
    })
}