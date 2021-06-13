function loginscreenon() {
    document.getElementById("overlay-login").style.display = "block";
}

function loginscreenoff() {
    document.getElementById("overlay-login").style.display = "none";
}

function openSearch() {
    document.getElementById("overlay-search-box").style.display = "block";
}

function closeSearch() {
    document.getElementById("overlay-search-box").style.display = "none";
}
$('.center').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '1px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '-1px',
                slidesToShow: 1
            }
        }
    ]
});
$('.index-internship-filter-section-slick-1').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev-1',
    nextArrow: '.arrow-next-1',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});
$('.index-internship-filter-section-slick-2').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.arrow-prev-2',
    nextArrow: '.arrow-next-2',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
});
