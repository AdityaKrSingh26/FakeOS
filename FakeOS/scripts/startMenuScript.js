let windowIcon = document.getElementById('windowIcon');
let startMenu = document.getElementsByClassName('startMenu')[0];

windowIcon.addEventListener("click", () => {
    console.log("start button clicked");
    event.stopPropagation();
    if (startMenu.style.display === "none" || startMenu.style.display === "") {
        startMenu.style.display = "block";
    } else {
        startMenu.style.display = "none";
    }
});

document.addEventListener("click", (event) => {
    if (startMenu.style.display === "block" && !startMenu.contains(event.target)) {
        startMenu.style.display = "none";
    }
});
