// Start Menu Array Animation
$("document").ready(function(){
  $("#menu-btn").mouseenter(function(){
    $("#responsive-menu").css("display", "block");
    $("#menu-btn").removeClass("shake");
    $("#responsive-menu").removeClass("slideOutRight");
    $("#responsive-menu").addClass("slideInRight");
  })


   $("#responsive-menu-wrapper").mouseleave(function(){
     //$("#responsive-menu").css("display", "block");
       $("#responsive-menu").removeClass("slideInRight");
       $("#responsive-menu").addClass("slideOutRight");
       $("#menu-btn").addClass("shake");
   })
})
// End Menu Array Animation

// Start How To Use Slider
$("document").ready(function(){
  var i = 1;
  var count = 1;
  var sliders = $('.sliders');
  var sliderRow = $('.slider-row');
  var sliderRowLength = sliderRow.length;

$("#change-slider").click(function(){
$(".sliders").css("display","block");
$(".slider-wrap").html(sliders[count]);

   count+= 1;
   if(count >= sliders.length){
     count = 0;
   }
})
$('#change-slider').click(function(){
  $('.slider-row').css("display","block");
$('.slider-discription-text').html(sliderRow[i]);
  i+= 1;
  if (i >= sliderRowLength) {
    i =0;
  }
})
})
// End How To Use Slider


// Start Scroll Smoth Plagin Settings
smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
// End Scroll Smoth Plagin Settings


// Initializing Wow Plagin
new WOW().init();