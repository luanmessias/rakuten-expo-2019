var breakPoint = 850;
var windowWidth = $(window).innerWidth();

function initializeClock() {
   // Set the date we're counting down to
   var countDownDate = new Date("Oct 10, 2019 00:00:01").getTime();

   // Update the count down every 1 second
   var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="clock"
      // document.getElementById("clock").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      // document.getElementById("seconds").innerHTML = seconds;


      // If the count down is finished, write some text 
      if (distance < 0) {
         clearInterval(x);
         document.getElementById("clock").innerHTML = "EXPIRED";
      }
   }, 1000);
}



$.fn.toggle2classes = function (class1, class2) {
   if (!class1 || !class2)
      return this;

   return this.each(function () {
      var $elm = $(this);

      if ($elm.hasClass(class1) || $elm.hasClass(class2))
         $elm.toggleClass(class1 + ' ' + class2);

      else
         $elm.addClass(class1);
   });
};

$('.goTo').click(function (e) {
   e.preventDefault();
   var target = $($(this).attr('href'));

   $('.menu__item').removeClass('active');
   $(this).addClass('active');

   if (target.length) {
      var scrollTo = target.offset().top - 76;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
   }
});


$('.mobMenu__bt').click(function () {
   $('.menu').toggle2classes('active', 'inactive');
});

$('.one').on('click', function () {
   $('p').get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
   });

});


//On resize functions
$(window).resize(function () {
   if ($(window).innerWidth() <= breakPoint) {
      $('.nrk_header .wrapper > .nrk_header__user').appendTo($(".navmob__welcome"));
   }

   if ($(window).innerWidth() > breakPoint) {
      $('.menu').removeClass('active');
      $('.menu').removeClass('inactive');
   }
});

//Scroll functions
$(window).scroll(function () {
   var sc = $(window).scrollTop();
   if (sc > 50) {
      $("header > .wrapper").addClass("active");
      $(".logo_menu").addClass("hide");
      $(".logo_menu_red").removeClass("hide");
   } else {
      $("header > .wrapper").removeClass("active");
      $(".logo_menu").removeClass("hide");
      $(".logo_menu_red").addClass("hide");
   }
});



$(document).ready(function () {
   initializeClock();

   //Banner Home Function
   $('.topSlider').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      smartSpeed: 450,
      mouseDrag: false,
      dots: true
   });
});