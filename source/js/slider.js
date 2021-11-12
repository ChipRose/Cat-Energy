//Slider

const slider = document.querySelector(".slider");
const buttonBefore = document.querySelector(".slider__button--before");
const buttonAfter = document.querySelector(".slider__button--after");
let count = 0;

buttonBefore.addEventListener("click", function () {
  if (slider.classList.contains("slider--init")) {
    slider.classList.remove("slider--init");
    slider.classList.add("slider--before");
  } else {
    if (slider.classList.contains("slider--before")) {
      slider.classList.remove("slider--before");
      slider.classList.add("slider--init");
    }
  }
  if (slider.classList.contains("slider--after")) {
    slider.classList.remove("slider--after");
    slider.classList.add("slider--before");
  }
});

buttonAfter.addEventListener("click", function () {
  if (slider.classList.contains("slider--init")) {
    slider.classList.remove("slider--init");
    slider.classList.add("slider--after");
  } else {
    if (slider.classList.contains("slider--after")) {
      slider.classList.remove("slider--after");
      slider.classList.add("slider--init");
    }
  }
  if (slider.classList.contains("slider--before")) {
    slider.classList.remove("slider--before");
    slider.classList.add("slider--after");
  }
});
