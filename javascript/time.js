const slider = document.querySelectorAll('.sliderTime');
const btnPrevTime = document.getElementById('prev-button-time');
const btnNextTime = document.getElementById('next-button-time');

let currentSlide = 0;

function hideSliderTime() {
  sliderTime.forEach(item => item.classList.remove('on'))
}

function showSliderTime() {
  sliderTime[currentSlide].classList.add('on')
}

function nextSliderTime() {
  hideSliderTime()
  if(currentSlide === sliderTime.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSliderTime()
}

function prevSliderTime() {
  hideSliderTime()
  if(currentSlide === 0) {
    currentSlide = sliderTime.length -1
  } else {
    currentSlide--
  }
  showSliderTime()
}

btnNextTime.addEventListener('click', nextSliderTime)
btnPrevTime.addEventListener('click', prevSliderTime)

setInterval(nextSlider, 8000)