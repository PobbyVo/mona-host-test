export default function SwiperModule() {
    // new

    // blog-related
    const blogRelated = new Swiper(".blog-related-swiper .swiper-container", {
        slidesPerView: "auto",
        speed: 1200,

        autoplay: {
            delay: 5000,
        },

        navigation: {
            nextEl: ".blog-related-swiper .swiper-navi.next",
            prevEl: ".blog-related-swiper .swiper-navi.prev",
        },
    });

    // banner-blog-swiper
    const bannerBlogSwiper = new Swiper(".banner-blog-swiper .swiper-container", {
        slidesPerView: "auto",
        speed: 1200,
        loop: true,

        autoplay: {
            delay: 5000,
        },
    });

    // banner-blog-swiper-vertical
    const bannerBlogSwiperVertical = new Swiper(
        ".blog-swiper-vertical .swiper-container",
        {
            slidesPerView: "auto",
            allowTouchMove: true,
            disableOnInteraction: true,
            speed: 1200,
            loop: true,
            spaceBetween: 8,

            autoplay: {
                delay: 2000,
            },

            breakpoints: {
                901: {
                    allowTouchMove: false,
                    speed: 8000,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 1,
                    },
                    direction: "vertical",
                },
            },
        }
    );

    // MONA TEAM
    const monaTeamSwiper = new Swiper(".mona-team-slide .swiper-container", {
        slidesPerView: "auto",
        slidesPerGroup: 3,
        speed: 20000,
        spaceBetween: 0,
        loop: true,
        delay: 0,
        allowTouchMove: false,
        disableOnInteraction: true,
        autoplay: {
            delay: 1,
        },
    });

    if (window.innerWidth > 1200) {
        let projectBig;
        function runSlider() {
            projectBig = new Swiper(".wd-slide .swiper-container", {
                slidesPerView: 1,
                speed: 1400,
                delay: 5000,
                // direction: 'vertical',
                // mousewheel: true,
                lazy: true,
                grabCursor: true,
                parallax: true,
                // loop: true,
                autoplay: false,
                // effect: 'creative',
                // creativeEffect: {
                //   prev: {
                //     // shadow: true,
                //     translate: [0, '0%', -1],
                //   },
                //   next: {
                //     translate: [0, '93%', 0]
                //   }
                // },
                // effect: 'fade',
                // fadeEffect: { crossFade: true },

                on: {},
            });
        }
        // runSlider()

        const wdIntoView = document.querySelector(".isView");
        const heightWindow = window.innerHeight;
        // let isRun = true
        if (wdIntoView) {
            function runScroll() {
                let hdHeight = document.querySelector(".hd");

                if (window.scrollY > 2200 && window.scrollY < 3500) {
                    let classEle = wdIntoView.getAttribute("id");
                    const isActive = wdIntoView.classList.contains("active");

                    if (!isActive) {
                        // loadSlider()
                        scrollToClass(classEle, 900);
                        wdIntoView.classList.add("active");
                    }

                    enableMouse();
                } else {
                    let active = document.querySelector(".isView.active");
                    if (active) {
                        active.classList.remove("active");
                    }
                }
            }

            const viewSlide = document.querySelector(".viewHover");

            function scrollToClass(classEle, speed) {
                const offSet = $(".hd").outerHeight();
                const section = $(classEle).offset();
                const targetOffset = section.top - offSet + 2;
                requestAnimationFrame(() => {
                    $("html,body").animate({ scrollTop: targetOffset }, speed);
                });
            }

            function enableMouse() {
                projectBig.mousewheel.enable();
            }
        }
    }

    if (window.innerWidth > 1200) {
        $(document).ready(function () {
            $(".viewHover").mousemove(function (e) {
                $(".viewGly").css({
                    top: e.pageY - 50,
                    left: e.pageX - 60,
                    opacity: 1,
                });
            });

            $(".viewHover").mouseleave(function (e) {
                $(".viewGly").css({
                    opacity: 0,
                });
            });

            $(".hideHover").mousemove(function (e) {
                e.stopPropagation();
                $(".viewGly").css({
                    opacity: 0,
                });
            });
        });
    }
    const abslide_sw = new Swiper(".abslide-sw .swiper", {
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        grabCursor: true,
        speed: 500,
        direction: "horizontal",
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".abslide-btn .btn-slide-next",
            prevEl: ".abslide-btn .btn-slide-prev",
        },
        loop: false,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        spaceBetween: 30,
        on: {
            init: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass(
                    "active"
                );
                $(".swiper-pagination-custom .swiper-pagination-switch")
                    .eq(0)
                    .addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass(
                    "active"
                );
                $(".swiper-pagination-custom .swiper-pagination-switch")
                    .eq(abslide_sw.realIndex)
                    .addClass("active");
            },
        },
    });
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        abslide_sw.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass(
            "active"
        );
        $(this).addClass("active");
    });
    // Swiper Blogc2
    const blogtc2_sw = new Swiper(".blogtc2-sw .swiper", {
        speed: 1200,
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 2000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".blogtc2-control .blogtc2-next",
            prevEl: ".blogtc2-control .blogtc2-prev",
        },
    });
    // Swiper Blogc3
    const blogtc3_sw = new Swiper(".blogpc3-sw .swiper", {
        speed: 1200,
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 2.2,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            },
            1230: {
                slidesPerView: 2,
            },
        },
    });

    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        abslide_sw.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass(
            "active"
        );
        $(this).addClass("active");
    });

    // RELATED
    const pjRelated = new Swiper('.pj-related-swiper .swiper-container', {
        slidesPerView: 1.2,
        speed: 1200,

        pagination: {
            el: ".pj-related-swiper .swiper-pagin-js",
            clickable: true
        },

        breakpoints: {
            650: {
                slidesPerView: 2.2
            },
            900: {
                slidesPerView: 3.1
            },
            1200: {
                slidesPerView: 'auto'
            }
        }
    })

    // Swiper Blogc3
    const blogslide_sw = new Swiper(".blogsw-slide .swiper", {
        speed: 1200,
        loop: true,
        spaceBetween: 24,
        autoplay: {
            delay: 2000,
        },
        slidesPerView: 2.2,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    //clhtop
    if (document.querySelector('.clhtop-c')) {
        var swiperclhtop = new Swiper(".swiper-clhtop", {
            centeredSlides: true,
            effect: 'coverflow',
            // loop: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 610,
                modifier: 1,
                slideShadows: true,
            },
        });
        swiperclhtop.slideTo(1)
    };

    //service hosting
    if (document.querySelector('.swiper-service-hosting')) {
        var swiperService = new Swiper('.swiper-service-hosting', {
            slidesPerView: 1.2,
            spaceBetween: 10,
            speed: 1000,
            autoplay: true,
            breakpoints: {
                660: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                900: {
                    slidesPerView: 2.6,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3.8,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }
        });
    };

    if (document.querySelector('.member-con')) {
        var swipermember = new Swiper('.swiper-member', {
            slidesPerView: 'auto',
            loop: true,
            centeredSlides: true,
            breakpoints: {
                550: {
                    centeredSlides: false,
                    loop: false,
                    slidesPerView: 'auto',
                },
            }
        });
    }

    // slider host page
    const ownStandard = document.querySelector('.own-standards-slider-js')
    if (ownStandard) {
        const standardSlider = new Swiper('.own-standards-slider-js .swiper-container', {
            spaceBetween: 1,
            slidesPerView: 1,
            centeredSlides: true,
            roundLengths: true,
            speed: 1000,
            gap: true,

            pagination: {
                el: ".own-standards-slider-js .swiper-pagin-js",
                clickable: true
            },
        })
    }

}
