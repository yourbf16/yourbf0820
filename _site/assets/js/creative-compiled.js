(function() {
  (function($) {
    "use strict";
    var navbarCollapse;
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      var target;
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 72
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    $('.js-scroll-trigger').click(function() {
      return $('.navbar-collapse').collapse('hide');
    });
    $('body').scrollspy({
      target: '#mainNav',
      offset: 75
    });
    navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        return $("#mainNav").addClass("navbar-scrolled");
      } else {
        return $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
    return $('#portfolio').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
  })(jQuery);

}).call(this);
