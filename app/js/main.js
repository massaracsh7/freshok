$(function () {

  $('.product-slide__img').on('click', function () {
    $('.slider-popup').fadeIn(800);
    $('body').addClass('lock');
    $('.slider-popup').addClass('slider-popup--active');

  });

  $(document).mouseup(function (e) {
    if (!sliderbtn.is(e.target) && sliderbtn.has(e.target).length === 0 &&
      !sliderPopup.is(e.target) && sliderPopup.has(e.target).length === 0
    ) {
      $('.slider-popup').removeClass('slider-popup--active');
      $('body').removeClass('lock');
      $('.slider-popup').fadeOut(800);
    }
  });

  $('.slider-popup__close').on('click', function () {
    $('.slider-popup').fadeOut(800);
    $('html').removeClass('hidden');
    $('.slider-popup').removeClass('slider-popup--active');
  });

  $('.slider-popup__slider').slick({
    arrows: true,
    dots: true
  });



  $('.select-style, .product-one__num').styler();

  /*   $('.product__filter-open').on('click', function () {
      $('body,html').animate({
        scrollTop: top
      }, 500);
      $('.filter').toggleClass('filter--active');
      $('.product__filter-open').toggleClass('product__filter-open--close');
      $('.overlay').toggleClass('overlay--active');
      $('body').toggleClass('lock');
    });
   */


  /*   $('.product__filter-btn').on('click', function () {
      $('.product__filter-btn').removeClass('product__filter-btn--active');
      $(this).addClass('product__filter-btn--active');
    });
   */

  $('.product__filter-open').on('click', function () {
    $('body,html').animate({
      scrollTop: top
    }, 500);
    $('.filter').toggleClass('filter--active');
    /* 	  $('.catalog__filter-mobile').addClass('filter--mobile'); */
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