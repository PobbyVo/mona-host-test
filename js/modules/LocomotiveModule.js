export default function LocomotiveModule() {
  function slide_modlue() {
    let wdSlideContainer = document.querySelector("#wd-slide-container");
    if (wdSlideContainer) {
      const wdSlideItems = gsap.utils.toArray(
        "#wd-slide-container .wd-slide-item"
      );
      gsap.to(wdSlideItems, {
        xPercent: -100 * (wdSlideItems.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#wd-slide-container",
          pin: true,
          start: "top top",
          scrub: 1,
          end: () => "+=" + (wdSlideContainer.offsetWidth - innerWidth),
        },
      });
    }
  }
  let pagedv_seo = document.querySelector(".slide-module");

  if (pagedv_seo) {
    slide_modlue();
  } else {
    if (window.innerWidth > 1200) {
      slide_modlue();
    }
  }

  // if (document.querySelector('[data-scroll-container]')) {
  //   const scroller = new LocomotiveScroll({
  //       el: document.querySelector('[data-scroll-container]'),
  //       smooth: true
  //   });
  
  //   scroller.on('scroll', ScrollTrigger.update)
  
  //   ScrollTrigger.scrollerProxy(
  //       '.bannerGalleryPos', {
  //           scrollTop(value) {
  //               return arguments.length ?
  //               scroller.scrollTo(value, 0, 0) :
  //               scroller.scroll.instance.scroll.y
  //           },
  //           getBoundingClientRect() {
  //               return {
  //                   left: 0, top: 0, 
  //                   width: window.innerWidth,
  //                   height: window.innerHeight
  //               }
  //           }
  //       }
  //   )
  
  //   ScrollTrigger.create({
  //       trigger: '.bannerGalleryPos',
  //       scroller: '.bannerGalleryPos',
  //       start: 'top+=10% 30%',
  //       end: 'bottom-=20% 30%',
  //       // animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
  //       scrub: 2,
  //       markers: true
  //   })
  
  //   ScrollTrigger.addEventListener('refresh', () => scroller.update())
  //   ScrollTrigger.refresh()
  // }

  // if (document.querySelector('[loco-data-scroll-container]')) {
  //   const loco = new LocomotiveScroll({
  //     el: document.querySelector('[loco-data-scroll-container]'),
  //   });
  // }
}
