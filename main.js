const bigCon = document.getElementById("big-con");

for (let i=0; i < 256; i++) {
    const smallDiv = document.createElement("div");
    smallDiv.className = "small-con";
    bigCon.appendChild(smallDiv);
}