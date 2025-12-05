function updateShirt() {
    document.getElementById("shirtName").textContent = document.getElementById("nameInput").value;
    document.getElementById("shirtNumber").textContent = document.getElementById("numberInput").value;
}

function changeColor() {
   let color = document.getElementById("colorSelect").value;
    let img = document.getElementById("shirtImage");
    let nameText = document.getElementById("shirtName");
    let numberText = document.getElementById("shirtNumber");

    if (color === "white") {
        img.src = "white.png";
        nameText.style.color = "#c00000";   // أحمر
        numberText.style.color = "#c00000"; // أحمر
    } else if (color === "red") {
        img.src = "red.png";
        nameText.style.color = "#ffffff";   // أبيض
        numberText.style.color = "#ffffff"; // أبيض
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
