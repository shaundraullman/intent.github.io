
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
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 250) {
             $('.navbar-default').addClass('on');
         }
         else {
             $('.navbar-default').removeClass('on');
         }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {

      $('.before-enter-checkbox').click(function() {
        if (window.okToEnter) {
          window.okToEnter = false;
        } else {
          window.okToEnter = true;
        }
      })

      $('.before-enter-btn').click(function(e) {
        e.preventDefault();
        if (window.okToEnter) {
          $('.modal-backdrop').addClass('hidden');
          $('.confirm-modal').addClass('hidden');
          $('.before-enter').removeClass('hidden');
        } else {
          alert('Please check box before continuing')
        }
      })

  	  $("#team").owlCarousel({

  	      navigation : false, // Show next and prev buttons
          slideSpeed : 300,
  	      paginationSpeed : 400,
  	  });

  	  $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {

      $(document).ready(function() {
        function sendEmail () {
          $.ajax({
            url: "//formspree.io/info@intentionalcap.com",
            method: "POST",
            data: {
              name: $('.contact-name').val(),
              organization: $('.contact-organization').val(),
              position: $('.contact-position').val(),
              email: $('.contact-email').val(),
              subject: $('.contact-subject').val(),
              message: $('.contact-message').val(),
            },
            dataType: "json",
            success: function (a, b, c) {
              $('.contact-organization').val('');
              $('.contact-position').val('');
              $('.contact-email').val('');
              $('.contact-subject').val('');
              $('.contact-message').val('');
              alert('Thank you,'+ $('.contact-name').val() +', for your message.')
              $('.contact-name').val('');
            }
          });
        }

        $(".contact-form").submit(function(e) {
          e.preventDefault();

          if ( $('.contact-name').val() == '' ||
               $('.contact-organization').val() == '' ||
               $('.contact-position').val() == '' ||
               $('.contact-email').val() == '' ||
               $('.contact-subject').val() == '' ||
               $('.contact-message').val() == '') {
                 alert('Please fill out all required fields')
               } else {
                 sendEmail();
               }
        });
      });
        // var $container = $('#themes-boxes');
        // $container.isotope({
        //     filter: '*',
        //     animationOptions: {
        //         duration: 750,
        //         easing: 'linear',
        //         queue: false
        //     }
        // });
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
    });
}());
}
main();
