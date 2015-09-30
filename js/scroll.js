            $(document).ready(function() {

              /*  run scroll to section only
                  if body has class page-scroller */
              var pageScroller = $('body').hasClass('page-scroller');
              if (pageScroller) {

                // begin homepage scroll to section
                var $scrollSection = $('.scroll-here');
                var $scrollTrigger = $('.trigger-scroll');
                var nextSection = 0;

                $(".trigger-scroll").click( function() {
                  $(this).removeClass('go-to-top');

                  // If at last section, scroll back to top on next click:
                  if (nextSection >= $scrollSection.length) {
                    $('html, body').animate({
                      scrollTop: 0
                    }, 1000);
                    nextSection = 0;
                    return;
                  }

                  // If already scrolled down
                  // to find next section position so you don't go backwards:
                  while ($('body').scrollTop() > $($scrollSection[nextSection]).offset().top) {
                    nextSection++;
                  }

                  // If next section is the last, add class to rotate arrow:
                  if (nextSection === ($scrollSection.length - 1)) {
                    $(this).addClass('go-to-top');
                  }

                  // Move to next section and increment counter check:
                  $('html, body').animate({
                    scrollTop: $($scrollSection[nextSection]).offset().top
                  }, 1000);
                  nextSection++;
                });
                // end homepage scroll to section
              } else {
                console.log('page-scroller class was not found in body tag');
              } //end if else

            });