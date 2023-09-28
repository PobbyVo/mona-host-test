export default function ChuanModule() {
    function functionSlider(
        element,
        isLoop,
        isCenter,
        betWeenInit,
        autoplay,
        effects,
        breakpoint
    ) {
        const swiperSlider = document.querySelectorAll(element);
        if (swiperSlider) {
            swiperSlider.forEach(item => {
                const swiper = item.querySelector(".swiper");
                const pagi = item.querySelector(".swiper-pagination");
                const next = item.querySelector(".swiper-next");
                const prev = item.querySelector(".swiper-prev");
                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,
                    speed: 1200,
                    autoplay: autoplay,
                    pagination: {
                        el: pagi,
                        type: "bullets",
                        clickable: true
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev
                    },
                    // slidesPerGroup: 2,
                    centeredSlides: isCenter,
                    loop: isLoop,
                    spaceBetween: betWeenInit,
                    effect: effects,
                    fadeEffect: {
                        crossFade: true
                    },
                    breakpoints: breakpoint
                });
            });
        }
    }

    // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
    functionSlider(".prj-banner-slider", false, false, 0, false, "slide", {
        0: {
            slidesPerView: 1,
            freeMode: true
        },
        1200: {
            slidesPerView: 1,
            freeMode: true
        }
    });

    // Xử lý scr Animation;

    function mySrc(element) {
        const src = {
            widthWrapper: element.clientWidth,
            numberLoop: 3,
            widthSlide: 0,
            slideRun: 0,
            lengthInit: 0,
            timeAnimation: 20000,
            hanleEvent: function() {
                element.style = `--translate:${this.slideRun}px; --timeAnimation:${this
          .timeAnimation / 1000}s`;
            },
            initScr: function() {
                const scrItems = element.querySelectorAll(".scr-item");
                let widthInit = 0;
                this.lengthInit = scrItems.length;
                scrItems.forEach(scrItem => {
                    widthInit += parseInt(scrItem.clientWidth) + 80;
                });
                this.widthSlide = widthInit;
                this.slideRun = widthInit;
            },
            doubleElement: function() {
                let arrScrItems = [];
                const scrItems = element.querySelectorAll(".scr-item");
                scrItems.forEach(scrItem => {
                    arrScrItems.push(scrItem.outerHTML);
                });

                function loop() {
                    arrScrItems.forEach(arr => {
                        element.innerHTML += arr;
                    });
                }
                for (let i = 0; i < this.numberLoop; i++) {
                    loop();
                }
            },
            start: function() {
                this.initScr();
                this.doubleElement();
                // this.middleFunction();
                this.hanleEvent();
            }
        };
        src.start();
    }
    const scrWrappers = document.querySelectorAll(".scr-wrapper");
    if (scrWrappers) {
        scrWrappers.forEach(element => {
            mySrc(element);
        });
    }

    // Xử lý scroll đến và đi section
    const ecoFix = document.querySelectorAll(".eco-fix");
    const notiss = document.querySelector('.notis');

    let $window = $(window);

    function scrollAddClass(el, el2, className) {
        $(el).each(function(i, element) {
            let offsetBot = $(element).offset().top + $(element).height();
            const ecoFixDecor = $(element).find(".eco-fix-decor");
            let number = 3;
            const dataNumber = $(element).attr("data-number");
            if (dataNumber) {
                number = parseInt(dataNumber);
            } else {
                number = 3;
            }
            // console.log("Element Top:", $(element).offset().top)
            // console.log("Element Bot:", offsetBot)

            if (
                $(element).offset().top <=
                $window.scrollTop() + $window.height() / number &&
                offsetBot > $window.scrollTop() + $window.height() / 5
            ) {
                $(element).addClass(className);

                if (
                    offsetBot <=
                    $window.scrollTop() + $window.height() - $window.height() / 7
                ) {
                    $(ecoFixDecor).addClass("final");
                    $(element).addClass("final");
                } else {
                    $(ecoFixDecor).removeClass("final");
                    $(element).removeClass("final");
                }
            } else {
                $(element).removeClass(className);

            }
            const element2s = $(element).find(el2);
            $(element2s).each(function(i, element2) {
                if (
                    $(element2).offset().top <=
                    $window.scrollTop() + $window.height() / 6
                ) {
                    $(element2).addClass(className);
                } else {
                    $(element2).removeClass(className);
                }
            });
        });
    }

    function bindImageAnimations() {
        scrollAddClass(".eco-fix", ".eco-fix-item", "is-inview");
        $window.on("scroll", function() {
            scrollAddClass(".eco-fix", ".eco-fix-item", "is-inview");
        });
    }
    bindImageAnimations();

    // Simple Paralax
    if (window.innerWidth > 1201) {
        var prlRow = document.getElementsByClassName("prlRow");
        if (prlRow) {
            new simpleParallax(prlRow, {
                orientation: "right",
                delay: 0.6,
                transition: "cubic-bezier(0,0,0,1)",
                overflow: true,
                scale: 1
            });
        }
    }
    // Slider swiper

    function functionSlider(
        element,
        isLoop,
        isCenter,
        betWeenInit,
        autoplay,
        effects,
        breakpoint
    ) {
        const swiperSlider = document.querySelectorAll(element);
        if (swiperSlider) {
            swiperSlider.forEach(item => {
                const swiper = item.querySelector(".swiper");
                const pagi = item.querySelector(".swiper-pagination");
                const next = item.querySelector(".swiper-next");
                const prev = item.querySelector(".swiper-prev");
                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,
                    speed: 1200,
                    autoplay: autoplay,
                    pagination: {
                        el: pagi,
                        type: "bullets",
                        clickable: true
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev
                    },
                    // slidesPerGroup: 2,
                    centeredSlides: isCenter,
                    loop: isLoop,
                    spaceBetween: betWeenInit,
                    effect: effects,
                    fadeEffect: {
                        crossFade: true
                    },
                    breakpoints: breakpoint
                });
            });
        }
    }

    // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint

    // Author three slider
    functionSlider(
        ".author-three-slider",
        false,
        false,
        24, { delay: 5000 },
        "slide", {
            0: {
                slidesPerView: 1,
                freeMode: true
            },
            550: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    );

    // Author seven slider
    functionSlider(
        ".author-seven-slider",
        false,
        false,
        24, { delay: 5000 },
        "slide", {
            0: {
                slidesPerView: 1,
                freeMode: true
            },
            500: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    );

    // Paralax custom
    function reveal() {
        var reveals = document.querySelectorAll(".parallaxSecJS");

        reveals.forEach((ele, i) => {
            var windowHeight = window.innerHeight;
            var elementTop = ele.getBoundingClientRect().top;
            var elementBottom = ele.getBoundingClientRect().bottom;
            var elementVisible = 150;
            const reveal = ele.querySelectorAll(".parallaxJS");
            const paraZoom = ele.querySelectorAll(".paraZoom");
            if (elementTop < windowHeight - elementVisible) {
                if (reveal.length > 0) {
                    reveal.forEach((ele2, i2) => {
                        let pos = elementTop / -2;

                        if (ele2.querySelector("img")) {
                            ele2.querySelector("img").style.top = `${pos}px`;
                        }
                        if (ele2.querySelector("video")) {
                            ele2.querySelector("video").style.top = `${pos}px`;
                        }
                    });
                }
            }
        });
    }
    if (window.innerWidth > 1200) {
        reveal();
        window.addEventListener("scroll", reveal);
    }

    // Paralax img
    let parallax = document.querySelector(".prl-block");
    if (parallax) {
        let item = parallax.querySelectorAll(".prl-item");
        item.forEach(el => {
            let _w = el.offsetWidth;
            let _h = el.offsetHeight;
            let img = el.querySelector("img");
            el.addEventListener("mousemove", e => {
                let _x = e.offsetX;
                let _y = e.offsetY;

                let X = (_x - _w / 2) / 10;
                let Y = (_y - _h / 2) / 10;

                img.style.transform = `translate(` + X + `px,` + Y + `px)`;
            });
            el.addEventListener("mouseleave", () => {
                img.style.transform = `none`;
            });
        });
    }

    // Js get height item

    function getHeight() {
        const getHeightItems = document.querySelectorAll(".getHeight");
        if (getHeightItems) {
            getHeightItems.forEach(item => {
                item.style = `--height:${item.getBoundingClientRect().height}px`;
            });
        }
    }
    getHeight();

    // Js get width item
    function getWidth() {
        const getWidthItems = document.querySelectorAll(".getWidth");
        if (getWidthItems) {
            getWidthItems.forEach(item => {
                item.style = `--width:${item.getBoundingClientRect().width}px`;
            });
        }
    }
    getWidth();
    window.addEventListener("resize", () => {
        getHeight();
        getWidth();
    });

    // TypingJS
    const isTyped = document.querySelector("#typed");
    if (isTyped) {
        var typed = new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30
        });
    }

    // Recheck

    const reCheckBlocks = document.querySelectorAll(".recheck-block");
    if (reCheckBlocks) {
        reCheckBlocks.forEach(item => {
            const recheckItems = item.querySelectorAll(".recheck-item");
            if (recheckItems) {
                recheckItems.forEach(item => {
                    const input = item.querySelector(".recheck-input");
                    if (input.checked) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
            }
        });
    }
    document.addEventListener("click", e => {
        const reCheckBlock = e.target.closest(".c-recheck-block");
        const reCheckItem = e.target.closest(".c-recheck-item");
        var event = new Event("change");
        if (reCheckBlock) {
            const reCheckItems = reCheckBlock.querySelectorAll(".c-recheck-item");
            const reCheckInputs = reCheckBlock.querySelectorAll(".c-recheck-input");

            if (reCheckItem) {
                const input = reCheckItem.querySelector(".c-recheck-input");
                if (input.type == "radio") {
                    reCheckItems.forEach(item => {
                        item.classList.remove("active");
                    });
                    reCheckInputs.forEach(item => {
                        item.checked = false;
                    });
                    input.checked = true;
                    if (input.checked == true) {
                        reCheckItem.classList.add("active");
                    }
                    input.dispatchEvent(event);
                }
                if (input.type == "checkbox") {
                    if (input.checked == true) {
                        input.checked = false;
                        reCheckItem.classList.remove("active");
                    } else {
                        input.checked = true;
                        reCheckItem.classList.add("active");
                    }
                    input.dispatchEvent(event);
                }
            }
        }
    });
    const sersFourParticles = document.getElementById("sers-four-particles-js");
    if (sersFourParticles && window.innerWidth > 600) {
        particlesJS("sers-four-particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" },
                    polygon: { nb_sides: 5 },
                    image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 400, line_linked: { opacity: 1 } },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: { distance: 200, duration: 0.4 },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
        });
        var count_particles, stats, update;

        count_particles = document.querySelector(".js-count-particles");
        update = function() {
            if (
                window.pJSDom[0].pJS.particles &&
                window.pJSDom[0].pJS.particles.array
            )
                requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }
    Splitting({
        target: "[data-spl]",
        by: "lines"
    });

    // SplitText inner

    const charSpls = document.querySelectorAll(".txt-spl .word");

    if (charSpls) {
        let text = "";
        charSpls.forEach(item => {
            text = item.innerHTML.trim();
            item.innerHTML = `<span class="chars">${text}</span>`;
        });
    }

    // Sers five grid

    const sersFiveGridList = document.querySelector(".sers-five-grid-list");

    if (sersFiveGridList) {
        for (let i = 0; i < 20; i++) {
            sersFiveGridList.innerHTML += `<div class="sers-five-grid-item"></div>`;
        }
    }

    function cscrollAddClass(el, className) {
        $(el).each(function() {
            let el = this;
            let itemTop = $(el).offset().top;
            if (
                $(el).hasClass("custom-fadeInUpBig") ||
                $(el).hasClass("custom-bounceInUp")
            ) {
                itemTop = $(el).offset().top - 2000;
            }
            if (
                $(el).hasClass("custom-fadeInDownBig") ||
                $(el).hasClass("custom-bounceInDown")
            ) {
                itemTop = $(el).offset().top + 2000;
            }
            if (itemTop < $(window).scrollTop() + $(window).height() / 10 * 8) {
                $(el).addClass(className);
            }
        });
    }

    function cbindImageAnimations() {
        cscrollAddClass(".scr-item", "active");
        $(window).on("scroll", function() {
            cscrollAddClass(".scr-item", "active");
        });
    }
    cbindImageAnimations();

    // Contact list check lenght
    // const cweList = document.querySelectorAll('.cwe-list');
    // if (cweList) {
    //     cweList.forEach(list => {
    //         const cweItems = list.querySelectorAll('.cwe-item');
    //         let itemLength = cweItems.length;
    //         if (itemLength <= 25 && itemLength > 24) {
    //             list.classList.add('one')
    //         } else {
    //             list.classList.remove('one')
    //         }
    //     })
    // }

    var timeEl = document.querySelector(".taa-time-fl");
    if (timeEl) {
        const hoursEl = timeEl.querySelector(".taa-time-item.hours");
        const minsEL = timeEl.querySelector(".taa-time-item.minutes");
        const secondsEL = timeEl.querySelector(".taa-time-item.seconds");

        function time() {
            var d = new Date();
            var s = d.getSeconds();
            var m = d.getMinutes();
            var h = d.getHours();
            hoursEl.innerHTML = `${h < 10 ? `0${h}` : `${h}`}`;
      minsEL.innerHTML = `${m < 10 ? `0${m}` : `${m}`}`;
      secondsEL.innerHTML = `${s < 10 ? `0${s}` : `${s}`}`;
    }
    setInterval(time, 1000);
  }

  if (document.querySelector(".cusc-seven-splide")) {
    var cusc_seven_slide = new Splide(".cusc-seven-splide", {
      type: "loop",
      // drag   : 'free',
      lazyLoad: "nearby",
      perPage: 1.5,
      perMove: 1,
      speed: 1200,
      pagination: false,
      arrows: false,
      gap: 24,
      focus: "center",
      updateOnMove: true,
      breakpoints: {
        550: {
          gap: 8
        }
      }
      // autoScroll: {
      //     speed: 1,
      // },
    }).mount(); // window.splide.Extensions
  }

  // CUUSC BANNER JS

  const cusBannerUsers = document.querySelectorAll(".cusc-banner-user");
  if (window.innerWidth > 768) {
    setTimeout(() => {
      if (cusBannerUsers) {
        cusBannerUsers.forEach(item => {
          item.classList.add("active-second");
        });
      }
    }, 1500);
  }
  if (window.innerWidth < 768 && cusBannerUsers) {
    let cusNumber = 0;
    let isCheck = false;
    function numberActive(number) {
      if (number > 0) {
        cusBannerUsers[number - 1].classList.remove("is-active");
      }
      if (isCheck) {
        cusBannerUsers[cusBannerUsers.length - 1].classList.remove("is-active");
      }
      cusBannerUsers[number].classList.add("is-active");
    }
    setInterval(() => {
      cusNumber++;
      if (cusNumber > cusBannerUsers.length - 1) {
        cusNumber = 0;
      }
      if (cusNumber <= cusBannerUsers.length - 1) {
        numberActive(cusNumber);
      }
      if (cusNumber == cusBannerUsers.length - 1 || cusNumber == 0) {
        isCheck = true;
      } else {
        isCheck = false;
      }
    }, 5000);
  }
  const nfeedItemImages = document.querySelectorAll(
    ".nfeed-item.nfeed-have-image.mutiple"
  );
  if (nfeedItemImages) {
    nfeedItemImages.forEach(item => {
      const nfeedImages = item.querySelectorAll(".nfeed-image-item");
      let numerHide = 0;
      numerHide = nfeedImages.length - 4;
      if (nfeedImages.length > 4) {
        nfeedImages[3].classList.add("show-number");
        nfeedImages[3]
          .querySelector(".nfeed-image-img")
          .setAttribute("data-number", `+${numerHide}`);
        nfeedImages.forEach((nfeedImage, index) => {
          if (index > 3) {
            nfeedImage.style = `display: none`;
          }
        });
      }
    });
  }
  if (document.querySelector(".nfeed-list")) {
    $(".nfeed-list").masonry({
      itemSelector: ".nfeed-item",
      columnWidth: ".nfeed-sizer",
      percentPosition: true,
      originTop: true
    });
      
  }
  const notiBtn = document.querySelector(".notis-icon");
  const notis =  document.querySelector('.notis')
  let isShow = true;
  if (notiBtn) {
    notiBtn.addEventListener("click", () => {
      isShow = !isShow;
      if (!isShow) {
        notis.classList.add("hide");
      } else {
        notis.classList.remove("hide");
      }
    });
  }

  const nFeedVideoItems = document.querySelectorAll(".nfeed-have-video");
  if (nFeedVideoItems) {
    nFeedVideoItems.forEach(item => {
      const btnPlay = item.querySelector(".nfeed-play.video");
      const video = item.querySelector(".nfeed-image-img video");
      if (btnPlay) {
        btnPlay.addEventListener("click", e => {
          e.preventDefault();
          if (video.paused) {
            video.play();
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }

  const blogf = document.querySelector('.blogf')
  if (blogf) {
    let $window = $(window);
    const footer = document.querySelector(".ft");

    $window.on("scroll", function() {
      if ($window.scrollTop() >= $(footer).offset().top) {
          blogf.classList.add("blogf-hidden");
      } else {
          blogf.classList.remove("blogf-hidden");
      }
    });
  } 
  if (window.innerWidth < 1200) {
    let $window = $(window);
    const footer = document.querySelector(".ft");
    const notis = document.querySelector(".notis");

    if (footer && notis) {
      $window.on("scroll", function() {
        if ($window.scrollTop() >= $(footer).offset().top) {
          notis.classList.add("notis-hidden");
        } else {
          notis.classList.remove("notis-hidden");
        }
      });
    }
  }
}