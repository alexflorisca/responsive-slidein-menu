(function($) {
  'use strict';

  $('.js-menuToggle').on('touchstart click', function(e) {
    e.preventDefault();

    console.log("toggling");
    var $body = $('body'),
        $menu = $('.slideinMenu'),

        /* Cross browser support for CSS "transition end" event */
        transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

    $body.addClass('animating');

    // Menu being hidden
    if($body.hasClass('menu-visible')) {
      $body.addClass('right');
      $(document).unbind('touchmove');
    }

    // Menu being shown
    else {
      $body.addClass('left');
              
      // Fix scrolling on the body while the menu is active
      $(document).bind('touchmove', function(e){ e.preventDefault(); });
      
      // Fix bug on iphone scrolling past beginning and end of the menu
      $('body').on('touchstart', '.isScrollable', function(e) {
        if (e.currentTarget.scrollTop === 0) {
          e.currentTarget.scrollTop = 1;
        } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
          e.currentTarget.scrollTop -= 1;
        }
      });

      // Only scroll the menu while it's visible.
      $('body').on('touchmove', '.isScrollable', function(e) {
        if($(this)[0].scrollHeight <= $(this).innerHeight()) { 
          e.preventDefault();
        }
        e.stopPropagation();
      });
    }

    // Toggle classes at the end of animation - for performance
    $menu.on(transitionEnd, function() {
      console.log('transition end');
      $body.removeClass('animating left right').toggleClass('menu-visible');
      $menu.off(transitionEnd);
    });
  });
})(jQuery);