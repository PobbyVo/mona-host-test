export default function BannerGalleryModule() {
  // let parallax = document.querySelector(".galleryParallax");
  // if (parallax) {
  //   let item = parallax.querySelectorAll(".galleryParallaxItem");
  //   item.forEach((el) => {
  //     let _w = el.offsetWidth;
  //     let _h = el.offsetHeight;
  //     // let item = el.querySelector('galleryParallaxWrap')
  //     el.addEventListener("mousemove", (e) => {
  //       let _x = e.offsetX;
  //       let _y = e.offsetY;
  //       let X = (_x - _w / 2) / 10;
  //       let Y = (_y - _h / 2) / 10;
  //       el.style.transform = `translate(` + X + `px,` + Y + `px)`;
  //     });
  //     el.addEventListener("mouseleave", () => {
  //       el.style.transform = `none`;
  //     });
  //   });
  // }
  // const bannerGalleryPos = document.querySelector(".bannerGalleryPos");
  // const galleryBoxParallaxs = document.querySelectorAll(".galleryBoxParallax");
  // let transform = 5;
  // if (bannerGalleryPos && window.innerWidth > 1200) {
  //   window.addEventListener("wheel", (e) => {
  //     if (isScrolledIntoView(bannerGalleryPos)) {
  //       if (e.deltaY > 0) {
  //         // console.log('Down')
  //         galleryBoxParallaxs.forEach((galleryBoxParallax, index) => {
  //           if (index % 2 == 0) {
  //             galleryBoxParallax.style.transform = `translateX(${transform}px)`;
  //           } else {
  //             galleryBoxParallax.style.transform = `translateX(-${transform}px)`;
  //           }
  //         });
  //         transform += 50;
  //       } else {
  //         // console.log('Up')
  //         galleryBoxParallaxs.forEach((galleryBoxParallax, index) => {
  //           if (index % 2 == 0) {
  //             galleryBoxParallax.style.transform = `translateX(-${transform}px)`;
  //           } else {
  //             galleryBoxParallax.style.transform = `translateX(${transform}px)`;
  //           }
  //         });
  //         transform -= 50;
  //       }
  //     }
  //   });
  // }
  // // const bannerGalleryPos = document.querySelector('.bannerGalleryPos')
  // function isScrolledIntoView(elem) {
  //   var docViewTop = $(window).scrollTop();
  //   var docViewBottom = docViewTop + $(window).height();
  //   var elemTop = $(elem).offset().top;
  //   var elemBottom = elemTop + $(elem).height();
  //   // console.log('elemTop', elemTop);  415
  //   // console.log('elemBottom', elemBottom); 1179
  //   // console.log('docViewTop', docViewTop);
  //   // console.log('docViewBottom', docViewBottom / 2);
  //   return elemBottom <= docViewBottom * 1.5 && elemTop >= docViewTop / 1.5;
  // }
}
