const slides = document.querySelectorAll(".img");

let index = 0;

function initSlide() {
  slides[index].classList.add("showslide");
}
function currSlide(i) {
  if (i >= slides.length) {
    index = 0;
  } else if (i < 0) {
    index = slides.length - 1;
  } else {
    index = i;
  }

  slides.forEach((slide) => slide.classList.remove("showslide"));
  slides[index].classList.add("showslide");
}
function nextSlide() {
  index = index + 1;
  currSlide(index);
}
function prevSlide() {
  index = index - 1;
  currSlide(index);
}

initSlide();

const left = document.querySelector("#left");
const right = document.querySelector("#right");

left.addEventListener("click", prevSlide);
right.addEventListener("click", nextSlide);
