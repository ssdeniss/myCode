$(function(){
    $('.advertising__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        fade: true,
        dots: true,
      });

      $('.popular__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        fade: true,
      })
});