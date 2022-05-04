$(function(){
    $('.slider__box').slick({        
        prevArrow: ' <img class="slider__arrow slider__arrow-left" src="./images/arrow-l.svg" alt="arrow left">',
        nextArrow: ' <img class="slider__arrow slider__arrow-right" src="./images/arrow-r.svg" alt="arrow right">',
        responsive: [
            {
              breakpoint: 481,
              settings: {
                arrows: false,
                autoplay: true,               
              }
            }            
          ]
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});