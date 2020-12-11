'use strict';

// Document ready
$(document).on('ready', function(){

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $('ol li').each(function(){
    var count = $(this).index() + 1;
    if (count > 0 && count < 10) {
      count = '0' + count;
    } if (count >= 10) {
      count;
    }
    $(this).prepend('<span class="span">' + count + '</span>');
  });

  mobileNav();
  footerNav();
  animationBg();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() { });
$(window).on('scroll', function() { });
$(window).on('resize', function() {
  var width = $(window).width();
  var btn = $('.btn-mobile');
  var body = $('body');
  var nav = $('.mobile-nav');

  if (width >= 960) {
    btn.removeClass('is-active');
    body.removeClass('is-fixed');
    nav.removeClass('is-active');
    $('.j-footer-nav').removeClass('is-active');
  }
});

function mobileNav() {
  var btn = $('.btn-mobile');
  var body = $('body');
  var nav = $('.mobile-nav');
  var navWrapper = $('.mobile-nav__wrapper');

  btn.on('click', function(){
    var _this = $(this);
    if (_this.hasClass('is-active')) {
      btn.removeClass('is-active');
      body.removeClass('is-fixed');
      nav.removeClass('is-active');
    } else {
      btn.addClass('is-active');
      body.addClass('is-fixed');
      nav.addClass('is-active');
    }
  });

  nav.on('click', function(){
    btn.removeClass('is-active');
    body.removeClass('is-fixed');
    nav.removeClass('is-active');
  });

  navWrapper.on('click', function(e){
    e.stopPropagation();
  })
}

function footerNav() {
  var link = $('.j-footer-nav');
  
  link.each(function(){
    var _this = $(this);
    
    _this.on('click', function(){
      var width = $(window).width();
      if (_this.hasClass('is-active') && width <= 959) {
        _this.removeClass('is-active');
        _this.next('.footer__nav').slideUp();
      } else if (!_this.hasClass('is-active') && width <= 959) {
        _this.addClass('is-active');
        _this.next('.footer__nav').slideDown();
      } else if (width >= 960) {
        return false
      }
    });
  })
}

function animationBg() {
  var controller = new ScrollMagic.Controller();
  var width = $(window).width();

  // build scenes
  new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: "onEnter", 
      duration: "100%"
    })
    .setTween(".footer__rounds .last", {y: "-400px", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".section-form__img",
      triggerHook: 1, 
      duration: "100%"
    })
    .setTween(".footer__rounds .first", {y: "-750px", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".content",
      triggerHook: "onEnter",  
      duration: "200%"
    })
    .setTween(".top-rounds .first", {y: "500px", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".content",
      triggerHook: "onEnter", 
      duration: "200%"
    })
    .setTween(".top-rounds .center", {y: "-400px", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: ".content",
      triggerHook: "onEnter", 
      duration: "200%"
    })
    .setTween(".top-rounds .last", {y: "500px", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);
    
    if (width < 1300) {
      controller.destroy(true);
    }
}