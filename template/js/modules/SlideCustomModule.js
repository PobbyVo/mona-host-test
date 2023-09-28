export default function SlideCustomModule() {
  // Solution slider
  const wrapper = document.querySelector(".dwebr-devices-swiper");
  const slides = document.querySelectorAll(".dwebr-devices-slide");

  const slider = {
    currentIndex: 0,
    spaceBetween: 24,
    slidesPerView: 1,
    slidePerGroup: 1,
    auto: false,
    loadCurrentSlide: function () {
      $(".active.dwebr-devices-slide").removeClass("active");
      if (slides[this.currentIndex]) {
        slides[this.currentIndex].classList.add("active");
      }
      //   let widthSlide = wrapper.offsetWidth;
      //   let between = this.spaceBetween * (this.currentIndex + 1);
      //   let translateX = 0;
      //   let perView = (widthSlide / this.slidesPerView) * this.slidePerGroup;
      //   slides.forEach((item) => {
      //     item.style = `width: ${perView}px; margin-left: ${this.spaceBetween}px`;
      //   });
      //   if (this.currentIndex == 0) {
      //     translateX = this.spaceBetween;
      //     wrapper.style = `transform: translate3d(-${translateX}px, 0, 0)`;
      //   } else {
      //     translateX = perView * this.currentIndex + between;
      //     wrapper.style = `transform: translate3d(-${translateX}px, 0, 0)`;
      //   }
    },

    handleEvent: function () {
      var _this = this;
      window.addEventListener("resize", () => {
        _this.loadCurrentSlide();
      });
      setInterval(() => {
        _this.currentIndex++;
        if (this.currentIndex < 0) {
          this.currentIndex = slides.length - 1;
        }
        if (this.currentIndex > slides.length - 1) {
          this.currentIndex = 0;
        }
        _this.loadCurrentSlide();
      }, 3000);
    },
    start: function () {
      if (wrapper) {
        this.handleEvent();
        this.loadCurrentSlide();
      }
    },
  };
  slider.start();

  // Js get height item

  function getHeight() {
    const getHeightItems = document.querySelectorAll(".getHeight");
    if (getHeightItems) {
      getHeightItems.forEach((item) => {
        item.style = `--height:${item.getBoundingClientRect().height}px`;
      });
    }
  }
  getHeight();
  window.addEventListener("resize", () => {
    getHeight();
  });
}
