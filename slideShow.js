// Script for navigation bar

let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
    index = (index + 1) % totalSlides;
    document.getElementById("slider").style.transform = `translateX(-${index * 100}%)`;
}
        
setInterval(showNextSlide, 5000);