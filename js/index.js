jQuery(function() {
    //slider for homepage
    $('.slider1-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnDotsHover: true,
        speed: 800,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dotsClass: "slider1-dots",
        appendDots: ".slider1-dots__container",


    });
    // filter
    let filter = $("[data-filter]");

    filter.on("click", function(e) {
            let category = $(this).data('filter');


            if (category == "all") {
                $("[data-category]").removeClass("hidden")
            } else {
                $("[data-category]").each(function() {

                    let chosenCategory = $(this).data('category')

                    if (chosenCategory !== category) {
                        $(this).addClass("hidden")
                    } else {
                        $(this).removeClass("hidden")
                    }
                })
            }
        })
        //slider for products page
    $('.products__filter-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: "slider2-dots",
        vertical: true,
        verticalSwiping: true
    });
    //slider for blog page
    $('.lastEvents__filter-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: "slider3-dots",
        vertical: true,
        verticalSwiping: true
    });
    //slider for single product page
    $('.product__slider-current').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product__slider-nav'
    });
    $('.product__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__slider-current',
        centerMode: true,
        focusOnSelect: true,

    });
    $('.product__slider__next').on("click", function() {
        $('.product__slider-nav').slick("slickNext");
        $('.product__slider-current').slick("slickNext");
    })
    $('.product__slider__prev').on("click", function() {
        $('.product__slider-nav').slick("slickPrev");
        $('.product__slider-current').slick("slickPrev");
    })

    //More button for single product page
    $(".product__description-button").on("click", function() {
        $(".product__description-button").toggleClass("hidden")
        $(".product__description--hidden__text").toggleClass("hidden")
    })

    //PopUp script
    $(".share-btn").on("click", function() {
        $(".pop-Up").removeClass("hidden")
        document.body.style.overflowY = "hidden"
        document.body.style.paddingRight = "15px"
    })
    $(".pop-Up").on("click", function() {
        $(".pop-Up").addClass("hidden")
        document.body.style.overflowY = "visible"
        document.body.style.paddingRight = "0px"
    })
    $(".pop-Up__content").on("click", function(e) {
        e.stopPropagination()
    })



});