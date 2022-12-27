let slidesReviews = document.querySelectorAll('.section-review  .section-reviews-content');
let slideReview = 0;
let slideInterval = setInterval(nextSlide, 10000);

function nextSlide() {
   slidesReviews[slideReview].className = 'section-reviews-content';
   slideReview = (slideReview + 1) % slidesReviews.length;
   slidesReviews[slideReview].className = 'section-reviews-content too';
}