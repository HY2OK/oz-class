const darkButton = document.querySelector('.dark');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');

let index = 0;

const imgMove = (index) => {
  carousel.style.transform = `translate3d(-${500 * index}px, 0, 0)`;
};

oneButton.addEventListener('click', () => {
  if (index === 0) return;
  index = 0;
  imgMove(index);
});

twoButton.addEventListener('click', () => {
  if (index === 1) return;
  index = 1;
  imgMove(index);
});

threeButton.addEventListener('click', () => {
  if (index === 2) return;
  index = 2;
  imgMove(index);
});

nextButton.addEventListener('click', () => {
  if (index === 2) return;
  index += 1;
  imgMove(index);
});

darkButton.addEventListener('click', () => {
  const $container = document.querySelector('.container');
  $container.classList.toggle('dark');
});
