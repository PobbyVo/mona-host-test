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

    // BANNER GALLERY
    // const bannerGallerySwiper = new Swiper('.banner-gallery-swiper .swiper-container', {
    //     slidesPerView: "auto",
    //     speed: 12000,
    //     delay: 0,
    //     spaceBetween: 0,
    //     loop: true,
    //     allowTouchMove: false,
    //     disableOnInteraction: true,
    // });

    // $('.banner-gallery-swiper').on('mouseenter', function (e) {
    //     bannerGallerySwiper.autoplay.start();
    // })
    // $('.banner-gallery-swiper').on('mouseleave', function (e) {
    //     bannerGallerySwiper.autoplay.stop();
    // })

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

    // var monaTeam = document.querySelector('.mona-team-slide .swiper-container').swiper
    // $('.mona-team-slide').on('mouseenter', function (e) {
    //     monaTeamSwiper.autoplay.start();
    // })
    // $('.mona-team-slide').on('mouseleave', function (e) {
    //     monaTeamSwiper.autoplay.stop();
    // })

    // FEEDBACK
    const feedbackSwiper = new Swiper(".feedback-big-item .swiper-container", {
        slidesPerView: "auto",
        speed: 1200,
        spaceBetween: 0,
        loop: true,
        delay: 0,
        allowTouchMove: true,
        disableOnInteraction: true,
        breakpoints: {
            1201: {
                speed: 12000,
                allowTouchMove: false,
            },
        },
    });

    // var mySwiper = document.querySelector('.feedback-big-item .swiper-container').swiper
    $(".feedback-big-item").on("mouseenter", function (e) {
        feedbackSwiper.autoplay.start();
    });
    $(".feedback-big-item").on("mouseleave", function (e) {
        feedbackSwiper.autoplay.stop();
    });

    // PROJECT BIG

    const html = `
    <div class="swiper-container">
                      <div class="swiper-wrapper wd-slide-list gsap-start">
                          <div id=".kim-thanh" class="item swiper-slide wd-slide-item kim-thanh wdIntoView">
                              <div class="wd-slide-item-wrap">
                                  <div class="wd-slide-item-wrap-content">
                                      <div class="container">
                                          <div class="wd-slide-item-wrap-content-flex">
                                              <div class="wd-slide-img d-flex">
                                                  <div class="wd-slide-img-col col col-5">
                                                      <div class="img">
                                                          <div class="img-relative">
                                                              <img src="./assets/images/kimthanh-bolocnhot.png" alt=""
                                                                  class="kt-gsap-fade-up swiper-lazy">
                                                          </div>
                                                          <div class="img-absolute loc-giua">
                                                              <img src="./assets/images/kimthanh-locgiua.png" alt=""
                                                                  class="kt-gsap-fade-down">
                                                          </div>
                                                          <div class="img-absolute qlhh gsap-fade-up" data-swiper-parallax="-100%">
                                                              <div class="txt-stars d-flex">
                                                                  <div class="txt-stars-lb">Quản lý hàng hóa</div>
                                                                  <div class="stars">
                                                                      <img src="./assets/images/icon-star.png" alt="">
                                                                      <img src="./assets/images/icon-star.png" alt="">
                                                                      <img src="./assets/images/icon-star.png" alt="">
                                                                      <img src="./assets/images/icon-star.png" alt="">
                                                                      <img src="./assets/images/icon-star.png" alt="">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="wd-slide-img-col col col-7">
                                                      <div class="img d-flex">
                                                          <div class="img-traffic col-6">
                                                              <div class="img-traffic-list d-flex">
                                                                  <div class="img-traffic-item col-6">
                                                                      <div class="img-traffic-item-wrap" data-swiper-parallax="-100%">
                                                                          <div class="txt-item kt">
                                                                              <div class="desc desc-flex">
                                                                                  <span class="">Doanh thu Online</span>
                                                                                  
                                                                                  <img src="./assets/images/icon-dollar-circle.png"
                                                                                      alt="" class="icon">
                                                                              </div>
                                                                              <div class="title">
                                                                                  <span class="">
                                                                                      +250%
                                                                                  </span>
                                                                                  <img src="./assets/images/icon-up-green-light.png"
                                                                                      alt="" class="icon icon-w">
                                                                              </div>
                                                                              <img src="./assets/images/bd-kt.png" alt=""
                                                                                  class="icon-bd">
                                                                              <div class="desc desc-flex desc-end">
                                                                                  <img src="./assets/images/icon-bd-line1.png"
                                                                                      alt="" class="icon">
                                                                                  so với <br> kinh doanh Offline
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="img-traffic-item col-6">
                                                                      <div class="img-traffic-item-wrap" data-swiper-parallax="-100%">
                                                                          <div class="txt-item kt">
                                                                              <div class="desc desc-flex">
                                                                                  Nhân sự kho
                                                                                  <img src="./assets/images/icon-profile.png"
                                                                                      alt="" class="icon">
                                                                              </div>
                                                                              <div class="title">
                                                                                  -80%
                                                                                  <img src="./assets/images/icon-dropdown-red.png"
                                                                                      alt="" class="icon icon-w">
                                                                              </div>
                                                                              <img src="./assets/images/bieudo-line2.png" alt=""
                                                                                  class="icon-bd">
                                                                              <div class="desc desc-flex desc-end text-left">
                                                                                  Tự động hóa <br> XXX đơn hàng/ngày
                                                                                  <img src="./assets/images/icon-bd-line1.png"
                                                                                      alt="" class="icon">
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="img-traffic-item col-6">
                                                                      <div class="img-traffic-item-wrap" data-swiper-parallax="-100%">
                                                                          <div class="txt-item kt">
                                                                              <div class="desc desc-flex">
                                                                                  Organic Traffic 
                                                                                  <img src="./assets/images/icon-activity.png"
                                                                                      alt="" class="icon">
                                                                              </div>
                                                                              <div class="title">
                                                                                  +200%
                                                                                  <img src="./assets/images/icon-up-green-light.png"
                                                                                      alt="" class="icon icon-w">
                                                                              </div>
                                                                              <img src="./assets/images/bieudo-line.png" alt=""
                                                                                  class="icon-bd">
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
      
                                                              <div class="link-group kt-gsap-fade-down">
                                                                  <div class="link-group-list d-flex f-ctn">
                                                                      <div class="link-group-item col" data-swiper-parallax="-200%">
                                                                          <a href="https://kimthanh.online/"
                                                                              class="d-flex btn-link hideHover">
                                                                              <img src="./assets/images/arrow-ani-c.png"
                                                                                  alt="">
                                                                              https://kimthanh.online/
                                                                          </a>
                                                                      </div>
                                                                      <div class="link-group-item col col-6">
                                                                          <div class="txt-stars d-flex" data-swiper-parallax="-200%">
                                                                              <div class="txt-stars-lb">Tốc độ vận hành</div>
                                                                              <div class="stars">
                                                                                  <img src="./assets/images/icon-star.png"
                                                                                      alt="">
                                                                                  <img src="./assets/images/icon-star.png"
                                                                                      alt="">
                                                                                  <img src="./assets/images/icon-star.png"
                                                                                      alt="">
                                                                                  <img src="./assets/images/icon-star.png"
                                                                                      alt="">
                                                                                  <img src="./assets/images/icon-star.png"
                                                                                      alt="">
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
      
                                                          <div class="img-big col-6">
                                                              <img src="./assets/images/kimthanh-website.png" alt=""
                                                                  class="kt-gsap-fade-up swiper-lazy">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
      
                                              <div class="wd-slide-content wdContentJS kt-gsap-fade-down">
                                                  <div class="wd-slide-info col col-4 kt-gsap-fade-up" data-swiper-parallax="-100%">
                                                      <div class="stt">01.</div>
                                                      <div class="name">Kim Thành</div>
                                                      <div class="desc">Nhà phân phối phụ tùng xe gắn máy <span
                                                              class="fw-700">lớn
                                                              nhất Miền Nam.</span> <span class="fw-700 hl-sec-2">Doanh thu 10
                                                              con số
                                                              từ thị trường online chỉ qua website</span></div>
      
                                                      <div class="pj-cate hideHover">
                                                          <div class="cate-sm-box">
                                                              <div class="cate-sm-list d-flex">
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">website</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">webapp</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">seo</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
      
                              <div class="wd-slide-contact hideHover">
                                  <div class="container">
                                      <div class="contact-btn d-flex f-end f-nowrap">
                                          <a href="#" class="btn btn-white">Liên hệ tư vấn</a>
                                          <a href="#" class="view-device d-flex f-center">
                                              <img src="./assets/images/icon-device.png" alt="">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div class="item swiper-slide wd-slide-item levents wdIntoView">
                              <div class="wd-slide-item-wrap">
                                  <div class="wd-slide-bg">
                                      <img src="./assets/images/levents-bg.png" alt="" class="swiper-lazy">
                                  </div>
      
                                  <div class="wd-slide-item-wrap-content">
                                      <div class="container">
                                          <div class="wd-slide-item-wrap-content-flex">
                                              <div class="wd-slide-img d-flex">
                                                  <div class="wd-slide-img-col col col-6 left">
                                                      <div class="img">
                                                          <div class="link-group-item col" data-swiper-parallax="-100%">
                                                              <a href="https://levents.asia/"
                                                                  class="d-flex btn-link btn-link-white hideHover">
                                                                  <img src="./assets/images/arrow-ani-c.png" alt="">
                                                                  https://levents.asia/
                                                              </a>
                                                          </div>
      
                                                          <div class="img-relative img-border gsap-fade-up">
                                                              <div class="img-border-wrap">
                                                                  <img src="./assets/images/levents-website.png" alt=""
                                                                      class=" swiper-lazy">
                                                              </div>
                                                          </div>
                                                          <div
                                                              class="img-absolute users img-border gsap-fade-down" data-swiper-parallax="-100%">
                                                              <div class="img-border-wrap">
                                                                  <div class="txt-item">
                                                                      <div class="title">
                                                                          <span class="">
                                                                              Hơn 5 triệu
                                                                          </span>
                                                                          <img src="./assets/images/icon-dropdown-red.png"
                                                                              alt="" class="icon">
                                                                      </div>
                                                                      <div class="desc">Người dùng năm 2022</div>
                                                                      <img src="./assets/images/column-map.png" alt=""
                                                                          class="desc-img">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div
                                                              class="img-absolute order img-border gsap-fade-down" data-swiper-parallax="-100%">
                                                              <div class="img-border-wrap">
                                                                  <div class="txt-item">
                                                                      <div class="title">
                                                                          <span class="">
                                                                          10.000+
                                                                      </span>
                                                                      </div>
                                                                      <div class="desc">Xử lý lượt mua hàng <br> cùng một lúc</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="wd-slide-img-col col col-6">
                                                      <div class="img d-flex f-ctn">
                                                          <div class="col col-6 as-end">
                                                              <div class="img-relative img-border gsap-fade-up" data-swiper-parallax="-100%">
                                                                  <div class="img-border-wrap">
                                                                      <img src="./assets/images/levents-cart.png" alt=""
                                                                          class=" swiper-lazy">
                                                                  </div>
                                                              </div>
                                                              <div class="img-absolute stock">
                                                                  <div class="lv-route lv-route-1">
                                                                      <img src="./assets/images/levents-route1.png" alt=""
                                                                          class="">
                                                                  </div>
                                                                  <div class="txt-item gsap-fade-up" data-swiper-parallax="-100%">
                                                                      <div class="title">
                                                                          <span class="">
                                                                          Tồn kho
                                                                      </span>
                                                                          <img src="./assets/images/icon-dropdown-red.png"
                                                                              alt="" class="icon">
                                                                      </div>
                                                                      <div class="desc">Giảm thất lạc <br>
                                                                          hàng hóa còn 0.1%</div>
                                                                  </div>
                                                              </div>
                                                              <div class="img-absolute emp">
                                                                  <div class="lv-route lv-route-2">
                                                                      <img src="./assets/images/levents-route2.png" alt=""
                                                                          class="   swiper-lazy">
                                                                  </div>
                                                                  <div class="txt-item gsap-fade-up" data-swiper-parallax="-100%">
                                                                      <div class="title">
                                                                          <span class="">
                                                                          50%
                                                                      </span>
                                                                          <img src="./assets/images/icon-dropdown-red.png"
                                                                              alt="" class="icon">
                                                                      </div>
                                                                      <div class="desc">Giảm nhân lực <br>
                                                                          vận hành</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="col col-6 as-center">
                                                              <div class="img-relative img-border mw-230 gsap-fade-up">
                                                                  <div class="img-border-wrap">
                                                                      <img src="./assets/images/levents-model.png" alt=""
                                                                          class=" swiper-lazy">
                                                                  </div>
                                                              </div>
      
                                                              <div
                                                                  class="img-absolute img-border order-event gsap-fade-down" data-swiper-parallax="-100%">
                                                                  <div class="img-border-wrap">
                                                                      <div class="txt-item">
                                                                          <div class="title">
                                                                              <span class="">
                                                                              10.000+
                                                                          </span>
                                                                              <img src="./assets/images/icon-up-green.png"
                                                                                  alt="" class="icon">
                                                                          </div>
                                                                          <div class="desc">Đơn hàng <br> trong một event</div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div
                                                                  class="img-absolute img-border customer gsap-fade-down" data-swiper-parallax="-100%">
                                                                  <div class="img-border-wrap">
                                                                      <div class="txt-item">
                                                                          <div class="title">
                                                                              <span class="">
                                                                              200%
                                                                          </span>
                                                                              <img src="./assets/images/icon-up-green.png"
                                                                                  alt="" class="icon">
                                                                          </div>
                                                                          <div class="desc">Khách hàng mới từ <br> Website sau 5 tháng SEO</div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
      
                                                  <div class="local-brand">
                                                      <div class="local-brand-top">TOP #1</div>
                                                      <div class="local-brand-wrap">
                                                          <div class="local-brand-img">
                                                              <img src="./assets/images/local-brand.png" alt="">
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
      
                                              <div class="wd-slide-content wdContentJS gsap-fade-down">
                                                  <div class="wd-slide-info col col-4" data-swiper-parallax="-100%">
                                                      <div class="stt ">02.</div>
                                                      <div class="name ">Levents</div>
                                                      <div class="desc ">Thương hiệu thời trang Streetwear sành điệu
                                                          cho giới trẻ với <span class="fw-700">2 năm làm chủ
                                                              thị trường Việt Nam</span></div>
      
                                                      <div class="pj-cate  hideHover">
                                                          <div class="cate-sm-box">
                                                              <div class="cate-sm-list d-flex">
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">website</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">webapp</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">seo</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">app</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
      
                              <div class="wd-slide-contact hideHover">
                                  <div class="container">
                                      <div class="contact-btn d-flex f-end f-nowrap">
                                          <a href="#" class="btn btn-white">Liên hệ tư vấn</a>
                                          <a href="#" class="view-device d-flex f-center">
                                              <img src="./assets/images/icon-device.png" alt="">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div class="item swiper-slide wd-slide-item e-talk wdIntoView">
                              <div class="wd-slide-item-wrap">
                                  <div class="wd-slide-bg">
                                      <img src="./assets/images/Etalk-bg.png" alt="" class="swiper-lazy">
                                  </div>
      
                                  <div class="wd-slide-item-wrap-content">
                                      <div class="container">
                                          <div class="wd-slide-item-wrap-content-flex">
                                              <div class="wd-slide-img d-flex">
                                                  <div class="wd-slide-img-col col col-4 left">
                                                      <div class="img">
                                                          <div class="link-group-item col" data-swiper-parallax="-100%">
                                                              <a href="https://e-talk.vn/"
                                                                  class="d-flex btn-link btn-link-trans  hideHover">
                                                                  <img src="./assets/images/arrow-ani-etalk.png" alt="">
                                                                  https://e-talk.vn/
                                                              </a>
                                                          </div>
      
                                                          <div class="img-relative">
                                                              <img src="./assets/images/etalk-website.png" alt=""
                                                                  class=" swiper-lazy">
                                                          </div>
                                                          <div class="img-absolute lap" data-swiper-parallax="-100%">
                                                              <img src="./assets/images/etalk-lap.png" alt=""
                                                                  class=" swiper-lazy">
                                                          </div>
      
                                                          <div class="etalk-decor etalk-decor-1" data-swiper-parallax="-100%">
                                                              <img src="./assets/images/etalk-decor1.png" alt="">
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="wd-slide-img-col col col-8">
                                                      <div class="img d-flex f-ctn">
                                                          <div class="col col-6 as-end">
                                                              <div class="img-relative">
                                                                  <img src="./assets/images/tinhnang-docthu.png" alt=""
                                                                      class=" swiper-lazy">
                                                              </div>
      
                                                              <div class="img-absolute learning" data-swiper-parallax="-100%">
                                                                  <div class="txt-item  ">
                                                                      <div class="title">
                                                                          Tính năng <br> học thử
                                                                      </div>
                                                                  </div>
                                                              </div>
      
                                                              <div class="etalk-decor etalk-decor-2" data-swiper-parallax="-100%">
                                                                  <img src="./assets/images/etalk-decor2.png" alt="">
                                                              </div>
                                                          </div>
                                                          <div class="col col-6 e-teacher">
                                                              <div class="img-relative">
                                                                  <img src="./assets/images/etalk-teacher.png" alt=""
                                                                      class=" swiper-lazy">
      
                                                                  <div class="img-absolute absolute-cir"></div>
                                                              </div>
                                                              <div class="img-absolute register">
                                                                  <div class="txt-item gsap-fade-down " data-swiper-parallax="-100%">
                                                                      <div class="title">
                                                                          3.500+
                                                                          <img src="./assets/images/icon-dropdown-red.png"
                                                                              alt="" class="icon">
                                                                      </div>
                                                                      <div class="desc">lượt đăng ký/năm <br> qua website
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="img-absolute revenue">
                                                                  <div class="txt-item " data-swiper-parallax="-100%">
                                                                      <div class="desc desc-flex">
                                                                          Doanh thu tăng
                                                                          <img src="./assets/images/icon-up-green.png" alt=""
                                                                              class="icon">
                                                                      </div>
                                                                      <div class="title">
                                                                          800%
                                                                          <img src="./assets/images/icon-bieudo.png" alt=""
                                                                              class="icon icon-w">
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="img-absolute mkt">
                                                                  <div class="txt-item " data-swiper-parallax="-100%">
                                                                      <div class="title">
                                                                          <img src="./assets/images/icon-g15.png" alt=""
                                                                              class="icon">
                                                                      </div>
                                                                      <div class="desc"><span class="fw-700">Công cụ
                                                                              Marketing</span> phủ sóng
                                                                          thương hiệu toàn ngành</div>
                                                                  </div>
                                                              </div>
      
                                                              <div class="etalk-decor etalk-decor-3" data-swiper-parallax="-100%">
                                                                  <img src="./assets/images/etalk-decor3.png" alt="">
                                                              </div>
      
                                                              <div class="etalk-decor etalk-decor-4" data-swiper-parallax="-100%">
                                                                  <img src="./assets/images/etalk-decor4.png" alt="">
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
      
                                              <div class="wd-slide-content wdContentJS">
                                                  <div class="wd-slide-info col col-4" data-swiper-parallax="-100%">
                                                      <div class="stt ">03.</div>
                                                      <div class="name ">E-talk</div>
                                                      <div class="desc ">Trung tâm ngoại ngữ Online 1 kèm 1 <span
                                                              class="fw-700">Vượt hơn 10.000 trung tâm dẫn đầu thị
                                                              trường</span></div>
      
                                                      <div class="pj-cate  hideHover">
                                                          <div class="cate-sm-box">
                                                              <div class="cate-sm-list d-flex">
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">website</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">lms</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">seo</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
      
                              <div class="wd-slide-contact hideHover">
                                  <div class="container">
                                      <div class="contact-btn d-flex f-end f-nowrap">
                                          <a href="#" class="btn btn-white">Liên hệ tư vấn</a>
                                          <a href="#" class="view-device d-flex f-center">
                                              <img src="./assets/images/icon-device.png" alt="">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div class="item swiper-slide wd-slide-item jang-in wdIntoView">
                              <div class="wd-slide-item-wrap">
                                  <div class="wd-slide-bg">
                                      <img src="./assets/images/jangin-bg.png" alt="" class="swiper-lazy">
                                  </div>
      
                                  <div class="wd-slide-item-wrap-content">
                                      <div class="container">
                                          <div class="wd-slide-item-wrap-content-flex">
                                              <div class="wd-slide-img d-flex">
                                                  <div class="wd-slide-img-col col col-4 left">
                                                      <div class="img">
                                                          <div class="link-group-item col" data-swiper-parallax="-100%">
                                                              <a href="https://jangin.vn/"
                                                                  class="d-flex btn-link btn-link-trans hideHover">
                                                                  <img src="./assets/images/arrow-ani-jangin.png" alt="">
                                                                  https://jangin.vn/
                                                              </a>
                                                          </div>
      
                                                          <div class="img-relative">
                                                              <img src="./assets/images/jangin-website.png" alt=""
                                                                  class=" swiper-lazy">
                                                          </div>
                                                          <div class="img-absolute revenue-onl">
                                                              <div class="txt-item " data-swiper-parallax="-100%">
                                                                  <div class="title">
                                                                      600%
                                                                  </div>
                                                                  <div class="desc"><span class="fw-600">Doanh thu
                                                                          online</span> <br>
                                                                      tại thị trường Việt <br> qua website</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="wd-slide-img-col col col-8">
                                                      <div class="img d-flex f-ctn">
                                                          <div class="col col-6 as-end">
                                                              <div class="img-relative">
                                                                  <img src="./assets/images/jangin-sofa-sm.png" alt=""
                                                                      class="swiper-lazy">
                                                              </div>
                                                              <div class="img-absolute process">
                                                                  <div class="txt-item " data-swiper-parallax="-100%">
                                                                      <div class="desc">
                                                                          Xử lý hơn
                                                                      </div>
                                                                      <div class="title">
                                                                          2.000+
                                                                      </div>
                                                                      <div class="desc">đơn hàng trực tuyến cùng lúc</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="col col-6 j-sofa">
                                                              <div class="img-relative">
                                                                  <img src="./assets/images/jangin-sofa.png" alt=""
                                                                      class=" swiper-lazy">
      
                                                                  <div class="img-absolute mkt">
                                                                      <div class="txt-item" data-swiper-parallax="-100%">
                                                                          <div class="title">
                                                                              <img src="./assets/images/icon-g16.png" alt=""
                                                                                  class="icon">
                                                                          </div>
                                                                          <div class="desc"><span class="fw-700">Tăng nhận
                                                                                  diện thương hiệu hơn 80%</span></div>
                                                                      </div>
                                                                  </div>
      
                                                                  <div class="img-absolute mkt reduce">
                                                                      <div class="txt-item" data-swiper-parallax="-100%">
                                                                          <div class="title">
                                                                              <img src="./assets/images/icon-g17.png" alt=""
                                                                                  class="icon">
                                                                          </div>
                                                                          <div class="desc"><span class="fw-700">Giảm thiểu
                                                                                  chi phí offline</span> và nhân sự kho hơn
                                                                              <span class="hl-jang fw-700">87%</span></div>
                                                                      </div>
                                                                  </div>
                                                                  <div class="img-absolute absolute-cir cir"></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
      
                                              <div class="wd-slide-content wdContentJS">
                                                  <div class="wd-slide-info col col-4" data-swiper-parallax="-100%">
                                                      <div class="stt ">04.</div>
                                                      <div class="name ">Jang In</div>
                                                      <div class="desc ">Thương hiệu nội thất hàng đầu tại Hàn Quốc.
                                                          Mang hơi thở hiện đại vào ngồi nhà Việt bằng sản phẩm chất lượng
                                                      </div>
      
                                                      <div class="pj-cate  hideHover">
                                                          <div class="cate-sm-box">
                                                              <div class="cate-sm-list d-flex">
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">website</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">webapp</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
      
                              <div class="wd-slide-contact hideHover">
                                  <div class="container">
                                      <div class="contact-btn d-flex f-end f-nowrap">
                                          <a href="#" class="btn btn-white">Liên hệ tư vấn</a>
                                          <a href="#" class="view-device d-flex f-center">
                                              <img src="./assets/images/icon-device.png" alt="">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
      
                          <div class="item swiper-slide wd-slide-item sg-retro wdIntoView">
                              <div class="wd-slide-item-wrap">
                                  <div class="wd-slide-bg">
                                      <img src="./assets/images/sg-retro-bg.png" alt="" class="swiper-lazy">
                                  </div>
      
                                  <div class="wd-slide-item-wrap-content">
                                      <div class="container">
                                          <div class="wd-slide-item-wrap-content-flex">
                                              <div class="wd-slide-img d-flex">
                                                  <div class="wd-slide-img-col col col-4 left">
                                                      <div class="img">
                                                          <div class="img-relative">
                                                              <img src="./assets/images/sg-retro-website.png" alt=""
                                                                  class=" swiper-lazy">
                                                          </div>
      
                                                          <div class="img-absolute users">
                                                              <div class="img-border-wrap" data-swiper-parallax="-100%">
                                                                  <div class="txt-item">
                                                                      <div class="desc desc-flex">
                                                                          Traffic tự nhiên
                                                                          <img src="./assets/images/icon-up-green.png" alt=""
                                                                              class="icon">
                                                                      </div>
                                                                      <div class="title">
                                                                          1.200%
                                                                      </div>
                                                                      <img src="./assets/images/line-map.png" alt=""
                                                                          class="desc-img">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="img-absolute re-emp">
                                                              <div class="img-border-wrap" data-swiper-parallax="-100%">
                                                                  <div class="txt-item">
                                                                      <div class="desc desc-flex">
                                                                          <span class="fw-700">Giảm tải </span> nhân sự kho
                                                                      </div>
                                                                      <div class="re-emp-num d-flex f-center">
                                                                          <img src="./assets/images/ar-down.png" alt=""
                                                                              class="icon">
                                                                          89%
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="wd-slide-img-col col col-8">
                                                      <div class="img d-flex f-ctn">
                                                          <div class="col col-6 as-end oxva">
                                                              <div class="img-relative">
                                                                  <img src="./assets/images/sg-retro-oxva-xlim.png" alt=""
                                                                      class=" swiper-lazy">
                                                              </div>
                                                              <div class="img-absolute open">
                                                                  <div class="img-border-wrap" data-swiper-parallax="-100%">
                                                                      <div class="txt-item">
                                                                          <div class="title">
                                                                              Quản lý đơn hàng
                                                                          </div>
                                                                          <div class="desc desc-flex">
                                                                              online offline <br> chung hệ thống
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="col col-6 sg-vape as-end">
                                                              <div class="img-relative">
                                                                  <div class="sg-vape-de">
                                                                      <img src="./assets/images/sg-vape-de.png" alt=""
                                                                          class=" swiper-lazy">
                                                                  </div>
      
                                                                  <div class="img-absolute sg-vape-ox">
                                                                      <img src="./assets/images/sg-vape-oxva.png" alt=""
                                                                          class="cir swiper-lazy">
                                                                  </div>
                                                              </div>
      
                                                              <div class="img-absolute open">
                                                                  <div class="img-border-wrap" data-swiper-parallax="-100%">
                                                                      <div class="txt-item">
                                                                          <div class="title">
                                                                              <span class="hl-sg-retro">
                                                                                  Mở thêm
                                                                              </span>
                                                                          </div>
                                                                          <div class="title">
                                                                              chi nhánh mới
                                                                          </div>
                                                                          <div class="desc desc-flex">
                                                                              sau 2 tháng bán Online
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
      
                                                              <div class="img-absolute traffic">
                                                                  <div class="img-border-wrap" data-swiper-parallax="-100%">
                                                                      <div class="txt-item txt-center">
                                                                          <div class="title">
                                                                              +500%
                                                                          </div>
                                                                          <div class="desc desc-flex">
                                                                              <span class="fw-700">Doanh số </span> từ bán
                                                                              online
                                                                          </div>
      
                                                                          <img src="./assets/images/column-map2.png" alt=""
                                                                              class="desc-img">
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
      
                                              <div class="wd-slide-content wdContentJS">
                                                  <div class="wd-slide-info col col-4" data-swiper-parallax="-100%">
                                                      <div class="stt ">05.</div>
                                                      <div class="name ">Saigon Retro Vape</div>
                                                      <div class="desc ">Chuỗi hệ thống Vape/Pod hàng đầu Hồ Chí
                                                          Minh
                                                          <span class="fw-700">bứt phá 500% Doanh số online từ website</span>
                                                      </div>
      
                                                      <div class="pj-cate  hideHover">
                                                          <div class="cate-sm-box">
                                                              <div class="cate-sm-list d-flex">
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">website</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">webapp</a>
                                                                  </div>
                                                                  <div class="cate-sm-item">
                                                                      <a href="#">seo</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
      
                              <div class="wd-slide-contact hideHover">
                                  <div class="container">
                                      <div class="contact-btn d-flex f-end f-nowrap">
                                          <a href="#" class="btn btn-white">Liên hệ tư vấn</a>
                                          <a href="#" class="view-device d-flex f-center">
                                              <img src="./assets/images/icon-device.png" alt="">
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    `;

    // function renderSlider() {
    //   const sliderRender = document.querySelector('.slider-render-js')

    //   if (sliderRender) {
    //       sliderRender.innerHTML = html
    //   }
    // }

    // renderSlider()

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

        // function wheelTop() {
        //   projectBig.mousewheel.enable();
        //   window.addEventListener('wheel', (e) => {
        //     if (e.deltaY < 0 && pageYOffset < 1) {
        //       projectBig.mousewheel.enable();
        //     }
        //   });
        // }

        const wdIntoView = document.querySelector(".isView");
        const heightWindow = window.innerHeight;
        // let isRun = true
        if (wdIntoView) {
            function runScroll() {
                let hdHeight = document.querySelector(".hd");
                // console.log(wdIntoView.getBoundingClientRect().top - hdHeight.clientHeight <= 0 && wdIntoView.getBoundingClientRect().top - hdHeight.clientHeight > -100);
                // if (wdIntoView.getBoundingClientRect().top < window.innerHeight && wdIntoView.getBoundingClientRect().top > 0) {

                //     let classEle = wdIntoView.getAttribute('id')
                //     const isActive = wdIntoView.classList.contains('active')
                //     if (!isActive) {
                //         scrollToClass(classEle, 900)
                //         wdIntoView.classList.add('active')
                //     }
                //     enableMouse()

                // } else {
                //     wdIntoView.classList.remove('active')
                //     projectBig.mousewheel.disable()
                //     wdIntoView.classList.remove('active')
                // }
                // if (wdIntoView.getBoundingClientRect().top < window.innerHeight && wdIntoView.getBoundingClientRect().top > 0) {
                //     let classEle = wdIntoView.getAttribute('id')
                //     const isActive = wdIntoView.classList.contains('active')
                //     // projectBig.autoplay.start();

                //     if (!isActive) {
                //         loadSlider()
                //         scrollToClass(classEle, 900)
                //         wdIntoView.classList.add('active')
                //     }
                //     enableMouse()
                // } else {
                //     let active = document.querySelector('.isView.active')
                //     if (active) {
                //         active.classList.remove('active')
                //     }
                //     // projectBig.autoplay.stop();
                // }

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

            // function loadSlider() {
            //   const checkSliderRendered = document.querySelector('.slider-render-js .swiper-container')
            //   if (!checkSliderRendered) {
            //     wdIntoViews.forEach((wdIntoView, i) => {
            //       if ($(window).scrollTop() > $(wdIntoView).offset().top - heightWindow) {
            //         renderSlider()
            //         // window.addEventListener('scroll', isSlide)
            //         runSlider()
            //       }
            //     })
            //   }
            // }

            // loadSlider()

            // runScroll();
            // window.addEventListener('scroll', runScroll)
            // window.addEventListener('scroll', enableMouse)

            const viewSlide = document.querySelector(".viewHover");

            // viewSlide.onmouseenter = () => {
            //     const isActive = document.querySelector('.isView.active')
            //     if (isActive) {
            //         isActive.classList.remove('active')
            //     }
            //     // isRun = true
            //     runScroll()
            //     enableMouse()
            //     // wheelTop()
            // }

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
                // window.addEventListener('wheel', (e) => {
                //     if (e.deltaY < 0) {
                //         // console.log('up');
                //         if (projectBig.isBeginning) {
                //             setTimeout(() => {
                //                 projectBig.mousewheel.disable()
                //                 wdIntoView.classList.remove('active')
                //             }, 100)
                //         }
                //     } else {
                //         // console.log('down');
                //         if (projectBig.isEnd) {
                //             setTimeout(() => {
                //                 projectBig.mousewheel.disable()
                //                 wdIntoView.classList.remove('active')
                //             }, 100)
                //         }
                //     }
                // })
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
  if(document.querySelector('.clhtop-c')) {
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
  if(document.querySelector('.swiper-service-hosting')) {
    var swiperService = new Swiper('.swiper-service-hosting', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        speed:1000,
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

}
