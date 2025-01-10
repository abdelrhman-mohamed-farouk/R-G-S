

// start slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// end slider
// start counter

const targetValue = 6500;
const intervalSpeed = 1;
const counterDisplay = document.getElementById('counter');
let currentValue = 0;
const interval = setInterval(() => {
  if (currentValue < targetValue) {
    currentValue++;
    counterDisplay.textContent = currentValue.toLocaleString();  
  } else {
    clearInterval(interval); 
  }
}, intervalSpeed);


const num = 97;
const numvalSpeed = 300;
const numdisplay = document.getElementById('counter2');
let numValue = 0;
const number = setInterval(() => {
  if (numValue < num) {
    numValue++;
    numdisplay.textContent = numValue.toLocaleString();  
  } else {
    clearInterval(interval); 
  }
}, numvalSpeed);




