$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/red/left.svg" ></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/red/right.svg" ></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
      });

    // $('.catalog-item__link').each(function(i) {
    //     $(this).on("click", function(e) {
    //         e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    //     })

    // $('.catalog-item__back').each(function(i) {
    //     $(this).on("click", function(e) {
    //         e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    //     })

    function Toggleslide(item){
        $(item).each(function(i) {
            $(this).on("click", function(e) {
                e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
            }) 
    };
    Toggleslide('.catalog-item__link');
    Toggleslide('.catalog-item__back');

});  