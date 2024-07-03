const textArea = document.getElementById("text");
const boldButton = document.getElementById("bold");
const underlineButton = document.getElementById("underline");
const increaseFontButton = document.getElementById("increaseFont");
const decreaseFontButton = document.getElementById("decreaseFont");
const clearAllButton = document.getElementById("clearAll");


// Toggle bold text
boldButton.addEventListener("click", () => {
    textArea.style.fontWeight = textArea.style.fontWeight === "bold" ? "normal" : "bold";
});

// Toggle underline text
underlineButton.addEventListener("click", () => {
    textArea.style.textDecoration = textArea.style.textDecoration === "underline" ? "none" : "underline";
});

// Increase font size
increaseFontButton.addEventListener("click", () => {
    let currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
    textArea.style.fontSize = (currentSize + 2) + "px";
});

// Decrease font size
decreaseFontButton.addEventListener("click", () => {
    let currentSize = parseInt(window.getComputedStyle(textArea).fontSize);
    if (currentSize > 10) {
        textArea.style.fontSize = (currentSize - 2) + "px";
    }
});

// Clear all text
clearAllButton.addEventListener("click", () => {
    console.log("Clearing all text");
    textArea.value = "";
});