let slides = document.querySelectorAll('.section-warranty-wrapper-slider .warranty-slider');
let slide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
   slides[slide].className = 'warranty-slider';
   slide = (slide + 1) % slides.length;
   slides[slide].className = 'warranty-slider showing';
}

const accBtn = document.getElementById('acc-btn');

accBtn.addEventListener('click', () => {
   const accContent = document.querySelector('.section-deadlines-content');
   accContent.classList.toggle('accardeon-content-show')
})