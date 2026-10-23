const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");
const closeBtn = document.getElementById("closeBtn");

photos.forEach(function(photo) {
    photo.addEventListener("click", function() {
        largeImage.src = photo.src;
        largeImage.alt = photo.alt;
        lightbox.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});