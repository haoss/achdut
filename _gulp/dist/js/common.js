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

  $("form").each(function(){
    $(this).validate();
  })

  mobileNav();
  footerNav();
  phoneMask();

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

function phoneMask() {
  var phone = $('.j-phone-mask');
  phone.each(function () {
    $(this).mask("+7 (999) 999-99-99");
  })
}

jQuery.extend(jQuery.validator.messages, {
  required: "Обязательное поле",
  remote: "Please fix this field.",
  email: "Введите правильный e-mail.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Пароли не совпадают.",

  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});