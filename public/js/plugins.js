// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


///// OBJECT FIT FIX /////
// Detect objectFit support
if('objectFit' in document.documentElement.style === false) {
  
  // assign HTMLCollection with parents of images with objectFit to variable
  var container = document.getElementsByClassName('img');
  
  // Loop through HTMLCollection
  for(var i = 0; i < container.length; i++) {
    
    // Asign image source to variable
    var imageSource = container[i].querySelector('img').src;
    
    // Hide image
    container[i].querySelector('img').style.display = 'none';
    
    // Add background-size: cover
    container[i].style.backgroundSize = 'cover';
    
    // Add background-image: and put image source here
    container[i].style.backgroundImage = 'url(' + imageSource + ')';
    
    // Add background-position: center center
    container[i].style.backgroundPosition = 'center center';
  }

  console.log('Browser does not support objectFit - workaround applied')
}
else {
  // You don't have to worry
  console.log('objectFit is supported - no workaround necessary')
}
///// END OF OBJECT FIT FIX /////


///// SLIDER /////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if(slides.length > 0) {

    console.log("Slides were found - JS Slider activated");

    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
        
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " dotActive";
    } else {
        console.log("No slides were found - JS Slider redundant");
    }
}
///// END OF SLIDER /////