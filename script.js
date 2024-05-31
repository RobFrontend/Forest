'use-strict'
const container = document.querySelectorAll('.container');
const reveal = document.querySelectorAll('.reveal');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

const dateEl = document.querySelector('.date');

// date
const currDate = new Date().getFullYear();
dateEl.textContent = currDate;
// reveals
const revealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) {
return;
  }
  entry.target.classList.remove('reveal');
  observer.unobserve(entry.target);
};

const revealObserver = new IntersectionObserver(revealSection, {
  root: null,
  trheshold: 0.05,
});

container.forEach(function(cont){
  revealObserver.observe(cont);
  cont.classList.add('reveal');
});

// sticky header

const headerHeight = header.getBoundingClientRect().height;

const stickyHeader = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting){
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
  
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  thershold: 0,
  // rootMargin: `${headerHeight}px`,
});

headerObserver.observe(hero);

// let previousScrollPosition = 0;

// const isScrollingDown = () =>{
//   let scrollingDown = false;
//   let scrollPosition = window.pageYOffset;
  
//   if(scrollPosition > previousScrollPosition){
//     scrollingDown = true;
//   }
  
//   previousScrollPosition = scrollPosition;
//   console.log(scrollingDown);
//   return scrollingDown;
// };

//  const handleScroll = () => {
//  if(isScrollingDown) {
//    header.classList.remove('sticky-header')
//  } else{
//    header.classList.add('sticky-header')
//  };
// };

// const scrollThrottle = _.throttle(handleScroll, 100);
// window.addEventListener("scroll", scrollThrottle);
