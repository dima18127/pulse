$(document).ready(function(){
    
    //carousel

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

    // catalog pulsomer buttons

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
      });
    // catalog pulsomer

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

    //Modal
    $('[data-modal=consultation]').on("click", function(){
        $('.overlay, #consultation').fadeIn('slow');
    })
    $('.modal__close').on("click", function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut()
    })
    $('.button_mini').on("click", function(){
        $('.overlay, #order').fadeIn('slow');
    })

    $('.button_mini').each(function(i){
        $(this).on("click", function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        })
    })

    function validateForms (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                required: "Введите свое имя",
                minlength: jQuery.validator.format("не менее {0} букв!")
                },
                phone: "Введите свой номер телефона",
                email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
                }
            }
        });
    }
    validateForms ('#consultation-form');
    validateForms ('#consultation form');
    validateForms ('#order form');

    $("input[name=phone]").mask("+7 (999) 999 - 9999");

    $('.form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");

            $ ('form').trigger('reset');
        });
        return false;
    });

    //pageUP
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $ ('.pageup').fadeOut();
        }
    });

    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });


});  

