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
