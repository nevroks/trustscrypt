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

            // $("[data-filter]").forEach(() => { $(this).removeClass("active") })
            // $(this).addClass("active")

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
});