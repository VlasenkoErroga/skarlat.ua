//CARD FOTO PRODUCT
$('.product-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    lazyLoad: 'ondemand',
    asNavFor: false,
    dots: false,
    
    responsive: [
        {
            breakpoint: 768,
            settings: {
                asNavFor: '.product-slider-nav',
                dots: true,
                dotsClass: 'product-slider-for-dots',
                arrows: false,
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


$('.product-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for',
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
                                        </svg>Prev </ button>`,
                                        responsive: [
                                            {
                                              breakpoint: 768,
                                              settings: 'slick'
                                            },
                                            {
                                                breakpoint:0,
                                                settings: 'unslick'
                                            }
                                                                                      
                                          ]
});








//GROUP SLIDER FOR SPECIAL OFFER
$('#slider-set-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    vertical: false,
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
        },
        {
            breakpoint: 992,
            settings: "unslick"
          }
    ]
});

$('.slider-set-second-product').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    verticalSwiping: true,
    lazyLoad: 'ondemand',
    vertical: true,
    nextArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow next-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-next">
        <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
    </svg>Next1 </ button>`,
    prevArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow prev-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-prev">
        <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
    </svg>Prev </ button>`,
    responsive: [
        {
            breakpoint: 992,
            settings: "unslick"
          }
    ],
});

$('.slider-set-third-product').slick({
    slidesToShow: 1,
    verticalSwiping: true,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: 'ondemand',
    vertical: true,
    nextArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow next-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-next">
        <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
    </svg>Next1 </ button>`,
    prevArrow: `<button type = "button" class = "custom_arrow slider-set-second-product_arrow prev-arrow">  <svg viewbox="0 0 6 9" class="arrow-slick-prev">
        <path d="M0 0.7L3.5 4.4L0 8.4L0.8 9L5 4.4L0.8 0L0 0.7Z"></path>
    </svg>Prev </ button>`,
    responsive: [
        {
            breakpoint: 992,
            settings: "unslick"
          }
    ]
});

//SLIDER PRODUCT CARD FOR SET SERIES
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
});

//MAIN SLIDER ON MAIN PAGE
$(".main-carusel").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    dotsClass: 'main-dots',
    dotClass: 'main-dot',
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
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