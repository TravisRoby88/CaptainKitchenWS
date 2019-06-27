const slideshowImages = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].getElementsByClassName.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].getElementsByClassName.display = "block";
}