$(function () {

  $('.slider-sale__inner').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000
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