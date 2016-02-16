// Scrolling fixed navbar
(function(window, document, $) {
  $(document).ready(function() {
    var stickyNavTop = $('.navbar').offset().top;

    var stickyNav = function() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyNavTop) {
        $('.navbar').addClass('navbar-fixed-top');
        $('.front-page-content').addClass('correct-positioning');
        $('.about-page-content').addClass('correct-positioning-other');
        $('.services-page-content').addClass('correct-positioning-other');
        $('.gallery').addClass('correct-positioning-other');
        $('.contact-page-content').addClass('correct-positioning-other');
      } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('.front-page-content').removeClass('correct-positioning');
        $('.about-page-content').removeClass('correct-positioning-other');
        $('.services-page-content').removeClass('correct-positioning-other');
        $('.gallery').removeClass('correct-positioning-other');
        $('.contact-page-content').removeClass('correct-positioning-other');
      }
    };

    stickyNav();

    $(window).scroll(function() {
      stickyNav();
    });
  });
})(window, window.document, jQuery);
