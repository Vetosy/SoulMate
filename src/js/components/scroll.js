import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 600,
  speedAsDuration: true,
});
