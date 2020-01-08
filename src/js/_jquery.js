import 'jquery-mask-plugin/dist/jquery.mask';
$(document).ready(function () {

    //Range
    if ($("#range-ion").length > 0) {
        $("#range-ion").ionRangeSlider({
            skin: "flat",
            type: "double",
            min: 0,
            max: 50000,
            from: 12050,
            to: 37500,
            postfix: "грн"
        });
    }

    $('#btn-up').fadeOut(0);
    $(window).scroll(function (e) {
        if ($(window).scrollTop() >= 400) {
            $('#btn-up').fadeIn(400);
        } else {
            $('#btn-up').fadeOut(400);
        }
    });

    $('#btn-up').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

    $('.btn_favorite').on('click', function () {
        $(this).toggleClass('btn_favorite--active');
    });

    $('.btn_balance').on('click', function () {
        $(this).toggleClass('btn_balance--active');
    });

    $('.way-node').on('click', function () {
        $(this).remove();
    });

 
        $('#phone').mask("+38(099) 999-99-99");
    

    $('#add-coment').on('click', function () {
        if ($('#add-coment').prop('checked')) {
            $('#add-coment-place').removeAttr('disabled')
        } else {
            $('#add-coment-place').attr('disabled', '');
        }
    })

    $('.close-basket-item').on('click', function () {
        $(this)
            .parent()
            .remove();

    });

    $('#basketModalButtonHeader').on('click', function () {
        $("#basketModal").modal();
    });

    $('.in-basket').on('click', function () {
        $("#basketModal").modal();
    });

    $('#add-products-compare').on('click', function () {
        $("#addProductCompareModal").modal();
    });
    $('#add-products-compare-to').on('click', function () {
        $("#addProductCompareModal").modal();
    });

    $('#enterModalButton').on('click', function () {
        $("#enterModal").modal();
    });

    $('.mob-menu-header__button').on('click', function () {

        $('.mob-menu').removeClass('mob-menu--active');
        $('body')
            .last()
            .children(".modal-backdrop.fade.show")
            .remove();
        $("#enterModal").modal();

    })

    $('.mob-menu-header__button-lk').click(function () {
        $('.mob-nav-lk').toggleClass('active');
        $('.mob-menu-header__button-lk').toggleClass('active');
    })

    $(".carusel-products").owlCarousel({

        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            },
            1400: {
                items: 8
            }
        }
    });

    $(".main-carusel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        dotsClass: 'main-dots',
        dotClass: 'main-dot',
        autoplay: true,
        margin: 20,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1200: {
                items: 1
            }
        }
    });

    $('.tooltips').tooltip({boundary: 'window'})

    $(".add_products").click(function () {

        $(this)
            .parent()
            .parent()
            .parent()
            .children('.additem')
            .children('.product')
            .toggleClass('product-enebled')

        $(this)
            .parent()
            .parent()
            .parent()
            .children('.additem')
            .children('.helper-product-sm')
            .toggleClass('helper-product-sm-view');

        $(this)
            .parent()
            .parent()
            .parent()
            .children('.additem')
            .children('.helper-product-md')
            .toggleClass('helper-product-md-view');

        $(this).remove();

    });

    $('.close-jumbotron-basket').click(function () {
        $('.jumbotron-basket').remove();
    })

    $('.burger_menu').click(function () {
        $('.mob-menu').toggleClass('mob-menu--active');
        $('<div class="modal-backdrop fade show"></div>').appendTo('body');

    });

    $(document).mouseup(function (e) {
        const mobmenu = $(".mob-menu");
        const modalWindow = $(".modal");
        const btnSkarlat = $('.btn-vidget-skarlat');

        if (!btnSkarlat.is(e.target) && btnSkarlat.has(e.target) && !mobmenu.is(e.target) && mobmenu.has(e.target).length === 0 && !modalWindow.is(e.target) && modalWindow.has(e.target).length === 0) {

            mobmenu.removeClass('mob-menu--active');
            btnSkarlat
                .children('.vidget-content')
                .removeClass('active');

            if ($(".modal-backdrop.fade.show")) {
                $('body')
                    .last()
                    .children(".modal-backdrop.fade.show")
                    .remove();
            }
        }
    });

    $('.mob-menu-catalog').click(function () {
        $('.mob-nav-main-second').toggleClass('active');
    });

    $('.btn-vidget-skarlat').click(function () {
        $('.vidget-content').toggleClass('active');
    });

    $('.mob-menu-catalog-back').click(function () {
        $(this)
            .parent()
            .removeClass("active");
        $('.mob-menu-header__button-lk').removeClass('active');
    });

    $('.mob-nav-main-second li a').click(function () {
        $(this)
            .parent()
            .children('.mob-nav-main-third')
            .toggleClass('active');
    });

    $('.mob-nav-main-third li a').click(function () {
        $(this)
            .parent()
            .children('.mob-nav-main-fourth')
            .toggleClass('active');
    });

    $("#subscribeBtn").click(function () {
        $("#subscribeModal").modal();
    });

    $('.way-node').on('click', function () {
        $(this).remove();
    });

    $('.way-node--clear').on('click', function () {
        $('.way-node').remove();
        $('.way-count').remove();
    })

    $('#btnFilter').on('click', function () {
        $("#filterModal").modal();
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        lazyLoad: 'ondemand',
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    nextArrow: `<button type = "button" class = "custom_arrow custom_arrow-for">  <svg class="arrow-slick-next" viewBox="0 0 10 10">
                    <path d="M7.7 5L3.8 8.6c-.2.2-.2.6 0 .8l.5.4c.2.2.6.2.8 0l4.7-4.4c.1-.1.2-.3.2-.4 0-.1-.1-.3-.2-.4L5.1.2c-.2-.2-.6-.2-.8 0l-.5.4c-.2.2-.2.6 0 .8L7.7 5z"/>
                    </svg>Next1 </ button>`,
                    prevArrow: `<button type = "button" class = "custom_arrow custom_arrow-for">  <svg class="arrow-slick-prev" viewBox="0 0 10 10">
                    <path d="M2.3 5l3.9-3.6c.2-.2.2-.6 0-.8L5.7.2c-.2-.2-.6-.2-.8 0L.2 4.6c-.1.1-.2.3-.2.4 0 .1.1.3.2.4l4.7 4.4c.2.2.6.2.8 0l.5-.4c.2-.2.2-.6 0-.8L2.3 5z"/>
                    </svg>Prev </ button>`
                }
            }
        ]
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        lazyLoad: 'ondemand',
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        nextArrow: `<button type = "button" class = "custom_arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-next">
                                                <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
                                            </svg>Next1 </ button>`,
        prevArrow: `<button type = "button" class = "custom_arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-prev">
                                                <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
                                            </svg>Prev </ button>`
    });

    $('.slider-set-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        nextArrow: `<button type = "button" class = "custom_arrow-set-product next-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-next">
                                                <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
                                            </svg>Next1 </ button>`,
        prevArrow: `<button type = "button" class = "custom_arrow-set-product prev-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-prev">
                                                <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
                                            </svg>Prev </ button>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                    arrows: false
                }
            }
        ]
    });

    $('.slider-set-second-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        lazyLoad: 'ondemand',
        vertical: true,
        nextArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow next-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-next">
            <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
        </svg>Next1 </ button>`,
        prevArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow prev-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-prev">
            <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
        </svg>Prev </ button>`
    });

    $('.product-lines__carusel').owlCarousel({
        items: 6,
        loop: false,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2,
                margin: 6
            },
            300: {
                items: 2,
                margin: 6
            },
            600: {
                items: 3,
                margin: 6
            },
            768: {
                items: 4,
                margin: 6
            },
            1025: {
                items: 6,
                margin: 16
            }

        }
    })

});
