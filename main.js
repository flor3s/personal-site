// SMOOTHER SCROLLING //
function scrollSmoothly(target,duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  // easing function for smoother scrolling: http://gizma.com/easing/
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// scroll click
var scroll = document.querySelector('.scroll-to');
var secondContainer = document.querySelector('#two');
var navFadeHeight = secondContainer.getBoundingClientRect().top;

var header = document.querySelector('.header');

scroll.addEventListener('click', function(){
  scrollSmoothly('#two', 1000);
})

// FADE IN //

// fade in navbar on scroll position
 window.onscroll = function(e){
  if(window.pageYOffset >= navFadeHeight - 1){
    header.classList.remove('hide-el');
    header.classList.add('fade-in');
  }
 }