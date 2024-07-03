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

// ----------------- horoscope MODAL -----------------
let horoscopeIcon = document.getElementById('horoscopeIcon');
let horoscopeModal = document.getElementById('horoscopeModal');
let horoscopeClose = document.getElementById('horoscopeClose');

horoscopeIcon.addEventListener("click", (event) => {
    console.log("horoscopeIcon button clicked");
    event.stopPropagation();
    if (horoscopeModal.style.display === "none" || horoscopeModal.style.display === "") {
        horoscopeModal.style.display = "block";
    } else {
        document.getElementById('finalValue').innerText = '';
        horoscopeModal.style.display = "none";
    }
});

horoscopeClose.addEventListener("click", () => {
    document.getElementById('finalValue').innerText = '';
    horoscopeModal.style.display = "none";
});

document.addEventListener("click", (event) => {
    if (horoscopeModal.style.display === "block" && !horoscopeModal.contains(event.target) && event.target !== horoscopeIcon) {
        document.getElementById('finalValue').innerText = '';
        horoscopeModal.style.display = "none";
    }
});

