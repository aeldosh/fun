function generateCandles() {
    let age = document.getElementById("ageInput").value;
    let candlesArea = document.getElementById("candlesArea");
    candlesArea.innerHTML = "";

    for (let i = 0; i < age; i++) {
        let candle = document.createElement("div");
        candle.classList.add("candle");
        candle.onclick = function() {
            candle.classList.add("lit");
            checkAllLit();
        };
        candlesArea.appendChild(candle);
    }

    let message = document.createElement("p");
    message.textContent = "Lit the candle by clicking every candle.";
    candlesArea.appendChild(message);
}

function checkAllLit() {
    let allCandles = document.querySelectorAll(".candle");
    let allLit = Array.from(allCandles).every(candle => candle.classList.contains("lit"));

    if (allLit) {
        let message = document.createElement("p");
        message.textContent = "Happie Birthday Best!";
        document.getElementById("candlesArea").appendChild(message);
    }
}
