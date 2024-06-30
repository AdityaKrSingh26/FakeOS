// ----------------- NOTEPAD MODAL -----------------
let notepadIcon = document.getElementById('notepadIcon');
let notepadModal = document.getElementById('notepadModal');
let closeModal = document.getElementById('close');

notepadIcon.addEventListener("click", (event) => {
    console.log("notepadIcon button clicked");
    event.stopPropagation();
    if (notepadModal.style.display === "none" || notepadModal.style.display === "") {
        notepadModal.style.display = "block";
    } else {
        notepadModal.style.display = "none";
    }
});

closeModal.addEventListener("click", () => {
    notepadModal.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (notepadModal.style.display === "block" && !notepadModal.contains(event.target) && event.target !== notepadIcon) {
        notepadModal.style.display = "none";
    }
});


// ----------------- GALLERY MODAL -----------------
let galleryIcon = document.getElementById('galleryIcon');
let galleryModal = document.getElementById('galleryModal');
let galleryClose = document.getElementById('galleryClose');

galleryIcon.addEventListener("click", (event) => {
    console.log("galleryIcon button clicked");
    event.stopPropagation();
    if (galleryModal.style.display === "none" || galleryModal.style.display === "") {
        galleryModal.style.display = "block";
    } else {
        galleryModal.style.display = "none";
    }
});

galleryClose.addEventListener("click", () => {
    galleryModal.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (galleryModal.style.display === "block" && !galleryModal.contains(event.target) && event.target !== galleryIcon) {
        galleryModal.style.display = "none";
    }
});

// ----------------- Currency MODAL -----------------
let currencyIcon = document.getElementById('currencyIcon');
let currencyModal = document.getElementById('currencyModal');
let currencyClose = document.getElementById('currencyClose');

currencyIcon.addEventListener("click", (event) => {
    console.log("currencyIcon button clicked");
    event.stopPropagation();
    if (currencyModal.style.display === "none" || currencyModal.style.display === "") {
        currencyModal.style.display = "block";
    } else {
        currencyModal.style.display = "none";
    }
});

currencyClose.addEventListener("click", () => {
    currencyModal.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (currencyModal.style.display === "block" && !currencyModal.contains(event.target) && event.target !== currencyIcon) {
        currencyModal.style.display = "none";
    }
});