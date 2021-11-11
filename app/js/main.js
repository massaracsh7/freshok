$(function () {


  $('.product-slide').on('click', function () {
    $('.slider-popup').toggleClass('slider-popup--active');
    $('.overlay').addClass('overlay--active');
    $('body').addClass('lock');
  });

  $('.slider-popup__close').on('click', function () {
    $('.slider-popup').removeClass('slider-popup--active');
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('lock');
  });

  $('.slider-popup__slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  });


  $('.select-style, .product-one__num').styler();

 

  $('.product__filter-open').on('click', function () {
    $('body,html').animate({
      scrollTop: top
    }, 500);
    $('.filter').toggleClass('filter--active');
    $('.overlay').addClass('overlay--active');
    $('body').addClass('lock');
  });

  $('.catalog__filter-close').on('click', function () {
    $('.filter').removeClass('filter--active');
    $('.overlay').removeClass('overlay--active');
    $('body').removeClass('lock');
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

  $('.filter-category>.filter__title').on('click', function () {
    $('.filter-category__list').toggleClass('filter__list--close');
    $('.filter-category>.filter__title').toggleClass('filter__title--close');
  });

  $('.filter-offer>.filter__title').on('click', function () {
    $('.filter-offer__form').toggleClass('filter__list--close');
    $('.filter-offer>.filter__title').toggleClass('filter__title--close');
  });

  $('.filter-brand>.filter__title').on('click', function () {
    $('.filter-brand__form').toggleClass('filter__list--close');
    $('.filter-brand>.filter__title').toggleClass('filter__title--close');
  });

  $('.filter-price>.filter__title').on('click', function () {
    $('.filter-price__form').toggleClass('filter__list--close');
    $('.filter__title').toggleClass('filter__title--close');
  });


  $('.product-slide').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        dots: false,
        arrows: false

      }
    }]
  });

  $(".star").rateYo({
    starWidth: "16px",
    spacing: "6px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b"
  });

    $(".comments-form__rating").rateYo({
      starWidth: "16px",
        normalFill: "#C1C1C1",
        ratedFill: "#FFB800",
    });



  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.interest-slider__list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
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


});