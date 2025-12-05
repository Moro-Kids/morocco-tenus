function updateShirt() {
    document.getElementById("shirtName").textContent = document.getElementById("nameInput").value;
    document.getElementById("shirtNumber").textContent = document.getElementById("numberInput").value;
}

function changeColor() {
    let color = document.getElementById("colorSelect").value;
    let img = document.getElementById("shirtImage");

    if (color === "white") {
        img.src = "white.png";
    } else {
        img.src = "red.png";
    }
}

function downloadImage() {
    const area = document.getElementById("previewArea");

    html2canvas(area).then(canvas => {
        const link = document.createElement("a");
        link.download = "shirt.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}