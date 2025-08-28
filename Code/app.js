const slides = document.querySelectorAll(".img");

let slideIndex = 0;
initSlide();

function initSlide() {
  slides[slideIndex].classList.add("showslide");
}
function showslide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("showslide");
  });
  slides[slideIndex].classList.add("showslide");
}

function nextSlide() {
  slideIndex += 1;
  showslide();
}
function prevSlide() {
  slideIndex -= 1;
  showslide();
}

const next = document.querySelector("#right");
const prev = document.querySelector("#left");

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
