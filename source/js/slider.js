//Slider

const slider = document.querySelector(".slider");
const slideBefore = document.querySelector(".slider__item--before");
const slideAfter = document.querySelector(".slider__item--after");
const buttonBefore = document.querySelector(".slider__button--before");
const buttonAfter = document.querySelector(".slider__button--after");
const slideScale = document.querySelector(".slider__scale");

//Buttons work

buttonBefore.addEventListener("click", function () {
  slideBefore.style.width = "100%";
  slideAfter.style.width = "0";
});

buttonAfter.addEventListener("click", function () {
  slideBefore.style.width = "0";
  slideAfter.style.width = "100%";
});

