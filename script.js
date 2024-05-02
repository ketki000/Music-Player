// CODED BY KETKI PATIL

const carousel = document.querySelector('.carousel');
  const slideContainer = document.querySelector('.slide-container');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  function updateCarousel() {
    const offset = -currentIndex * 100;
    slideContainer.style.transform = `translateX(${offset}%)`;
  }