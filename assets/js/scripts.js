var breakPoint = 850;
var windowWidth = $(window).innerWidth();


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

$('.menu__item').click(function (e) {
   e.preventDefault();
   var target = $($(this).attr('href'));

   $('.menu__item').removeClass('active');
   $(this).addClass('active');

   if (target.length) {
      var scrollTo = target.offset().top - 35;
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
   if (sc > 110) {
      $("header > .wrapper").addClass("active");
   } else {
      $("header > .wrapper").removeClass("active");
   }
});



$(document).ready(function(){
   //Banner Home Function


});