$(function () {

  $('.select-style').styler();

  $('.product__filter-open').on('click', function () {
    $('body,html').animate({
      scrollTop: top
    }, 500);
    $('.filter').toggleClass('filter--active');
    $('.product__filter-open').toggleClass('product__filter-open--close');
    $('.overlay').toggleClass('overlay--active');
    $('body').toggleClass('lock');
  });

  

  $('.product__filter-btn').on('click', function () {
    $('.product__filter-btn').removeClass('product__filter-btn--active');
    $(this).addClass('product__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product__list').addClass('product__list--list');
  });

  $('.button-grid').on('click', function () {
    $('.product__list').removeClass('product__list--list');
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.slider-sale__inner').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1200,
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

    $('.mob-nav').toggleClass('mob-nav--active');
    $('.overlay').toggleClass('overlay--active');
    $('.header').toggleClass('header--close');
    $('body').toggleClass('lock');
  });

  $('.user-nav__open').on('click', function () {
    $('.form-search').toggleClass('form-search--active');
    $('.form-search__text').attr("placeholder", "Я ищу...");
  });




  $('.brands__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst: true,
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });


});