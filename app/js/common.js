$(document).ready(function () {
        $('.testimonials--slider').slick({
            infinite: true,
            slidesToShow:1,
            slidesToScroll:1,
            arrow:true,
            dots:true
        });


        $(".main-menu-call").on("click", function () {
$(this).toggleClass("main-menu-call_opened")
        })
     });
