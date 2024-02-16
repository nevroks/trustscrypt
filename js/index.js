jQuery(function() {
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
});