$(function () {

  $('.slider-sale__inner').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });



  var container1 = document.querySelector('[data-ref="mixer-1"]');
  var container2 = document.querySelector('[data-ref="mixer-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(container1, config);
  var mixer2 = mixitup(container2, config);

  $('.header__btn').on('click', function () {
    $('.header__top').toggleClass('header__top--close');
    $('.main').toggleClass('main--close');
    $('.mob-nav').toggleClass('mob-nav--active');
    $('body').toggleClass('lock');
  });

  $('.form-search__open').on('click', function () {
    $('.form-search').toggleClass('form-search--active');
    $('.form-search__text').attr("placeholder", "Я ищу...");
  });

});