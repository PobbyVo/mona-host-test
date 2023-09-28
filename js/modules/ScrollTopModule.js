export default function ScrollTopModule() {
    // const scrollTopBtn = document.querySelector('.moveToTop');
    // const socialFixed = document.querySelector('.socialFixed');

    // const toggleClass = () => {
    //     pageYOffset >= 300 ? scrollTopBtn.classList.add('active') : scrollTopBtn.classList.remove('active');

    //     if (socialFixed) {
    //         pageYOffset >= 300 ? socialFixed.classList.add('active') : socialFixed.classList.remove('active');
    //     }
    // };
    // const scrollTop = () => {
    //     if (pageYOffset > 0) {
    //         window.scrollTo(0, pageYOffset - pageYOffset / 8);
    //         requestAnimationFrame(scrollTop);
    //     }
    // };
    // document.addEventListener('DOMContentLoaded', toggleClass);
    // window.addEventListener('scroll', toggleClass);
    // scrollTopBtn.addEventListener('click', scrollTop);

    var offset = 300;
    var duration = 550;
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
        $(".moveToTop").addClass("active");
        } else {
        $(".moveToTop").removeClass("active");
        }
    });
    $(".moveToTop").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, duration);
        return false;
    });
}
