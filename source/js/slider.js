const TABLET_WIDTH = 768;
const StartSliderState = {
  MOBILE: 0,
  TABLET: 50,
}

//Slider

const slider = document.querySelector('.slider');
const slideBefore = document.querySelector('.slider__item--before');
const slideAfter = document.querySelector('.slider__item--after');
const buttonBefore = document.querySelector('.slider__button--before');
const buttonAfter = document.querySelector('.slider__button--after');
const slideScale = document.querySelector('.slider__scale');

//Slider

slideScale.innerHTML = '';

const sliderRange = noUiSlider.create(slideScale, {
  start: [0],
  connect: true,
  range: {
    'min': 0,
    'max': 100,
  }
});


const isChangeSliderState = () => {
  return window.innerWidth < TABLET_WIDTH ? true : false;
};

isChangeSliderState() ? sliderRange.set(StartSliderState.MOBILE) : sliderRange.set(StartSliderState.TABLET);

window.addEventListener('resize', () => {
  sliderRange.set(StartSliderState.TABLET)
  if (isChangeSliderState()) {
    sliderRange.set(StartSliderState.MOBILE);
  }

  setInitialSliderState(start);
});

slideScale.noUiSlider.on('update', (values) => {
  let controlWidth = values[0];
  slideBefore.style.width = `${100 - controlWidth}%`;
  slideAfter.style.width = `${controlWidth}%`;
  slideBefore.style.transition = '';
  slideAfter.style.transition = '';
});

//Buttons work

buttonBefore.addEventListener('click', () => {
  slideBefore.style.width = '0';
  slideAfter.style.width = '100%';
  slideScale.noUiSlider.set([0]);
});

buttonAfter.addEventListener('click', () => {
  slideBefore.style.width = '100%';
  slideAfter.style.width = '0';
  slideScale.noUiSlider.set([100]);
});
