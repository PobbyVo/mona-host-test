import lgVideo from "https://cdn.skypack.dev/pin/lightgallery@v2.3.0-beta.4-wHHDtUvwtEwxkvaJnHDv/mode=imports/unoptimized/plugins/video/lg-video.es5.js";
export default function LightGalleryModule() {
  let Gal = document.querySelector(".gallery");
  let noThumbs = document.querySelector(".web-demo-cate-btn .button");
  if (noThumbs) {
    noThumbs = false;
  }

  if (Gal) {
    $(document).ready(function () {
      $(".gallery").lightGallery({
        selector: ".gallery__img",
        exThumbImage: "data-src",
        autoplayControls: false,
        flipHorizontal: false,
        flipVertical: false,
        rotate: false,
        share: false,
        fullScreen: false,
        actualSize: false,
        download: false,
      });
    });
  }

  // let GalVid = document.querySelector(".gallery__vid");
  // if (GalVid) {
  //   $(document).ready(function () {
  //     $("#gallery-videojs-demo").lightGallery({
  //       selector: ".gallery__vitem",
  //       plugins: [lgVideo],
  //       videojs: true,
  //       videojsOptions: {
  //         muted: true,
  //       },
  //       autoplayControls: false,
  //       flipHorizontal: false,
  //       flipVertical: false,
  //       rotate: false,
  //       share: false,
  //       fullScreen: false,
  //       actualSize: false,
  //       download: false,
  //     });
  //   });
  // }
}
