const images = document.querySelectorAll('.scroll-reveal');

const config = {
  root: '.container-scroll',
  rootMargin: '30px',
  threshold: 1.0
};

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {      
      //entry.target.classList.remove('hidden');
      entry.target.classList.add('visible');
    } 
  });
});

images.forEach(image => {
  observer.observe(image);
});


var header = $(".sticky");
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('mobile-nav');
    } else {
        header.removeClass("mobile-nav");
    }
});
