
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 800);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 250;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
            $('.arrow-home').addClass('on2');
        } else {
          $('.navbar-default').removeClass('on');
          $('.arrow-home').removeClass('on2');
        }
    });

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 250) {
             $('.navbar-default').addClass('on');
             $('.arrow-home').addClass('on2');

         }
         else {
             $('.navbar-default').removeClass('on');
             $('.arrow-home').removeClass('on2');
         }
    });


    $('.cat a').click(function() {
           $('.cat .active').removeClass('active');
           $(this).addClass('active');
           var selector = $(this).attr('data-filter');
           $container.isotope({
               filter: selector,
               animationOptions: {
                   duration: 750,
                   easing: 'linear',
                   queue: false
               }
           });
           return false;
       });

    $(window).load(function() {
      $(document).ready(function() {
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })
      });
    });
}());
}
main();
