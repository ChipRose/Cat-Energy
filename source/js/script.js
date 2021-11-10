//Burger

const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".navigation__toggle");
const navigationItems = document.querySelectorAll (".navigation__item");

navigation.classList.remove("navigation--nojs");

burger.addEventListener ("click", function(){
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
  }
});

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
