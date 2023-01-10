const btnOpen = document.querySelector('.button-open');
const mobileMenu = document.querySelector('.mobile-dropdown-menu');

mobileMenu.style.display = 'none';

let clickCounter = 0;

btnOpen.addEventListener('click', () => {
   clickCounter = clickCounter + 1;
   if (clickCounter % 2 === 0) {
      mobileMenu.style.display = 'none';
      btnOpen.innerHTML = '<use xlink:href="./icons/sprite.svg#open-btn"> </use>';
   } else {
      mobileMenu.style.display = 'block';
      btnOpen.innerHTML = '<use xlink:href="./icons/sprite.svg#close-btn"> </use>';
   };

});

const button = document.getElementsByTagName('button');

for (let i = 0; i < button.length; i = i + 1) {
   button[i].addEventListener('mouseover', () => {
      button[i].classList.toggle('btnHover');
   });

   button[i].addEventListener('mouseout', () => {
      button[i].classList.toggle('btnHover');
   });
};

const openBtn = document.querySelectorAll('.open-button');
const closeBtn = document.querySelectorAll('.close-button');
const projectOpen = document.querySelectorAll('.section-projects-card-img');
const projectContent = document.querySelectorAll('.card-show');
projectContent[0].classList.add('show');

openBtn.forEach((btn, i) => {
   btn.addEventListener('click', () => {
      projectContent[i].style.display = 'block';
      projectOpen[i].style.display = 'none';
   });
});

closeBtn.forEach((btn, i) => {
   btn.addEventListener('click', () => {
      projectContent[i].style.display = 'none';
      projectOpen[i].style.display = 'block';
   });
});

const progectImg = document.querySelectorAll('.project-img');

for (let i = 0; i < progectImg.length; i = i + 1) {
   progectImg[i].addEventListener('mouseover', () => {
      progectImg[i].classList.toggle('img-show');
   });

   progectImg[i].addEventListener('mouseout', () => {
      progectImg[i].classList.toggle('img-show');

   });
};