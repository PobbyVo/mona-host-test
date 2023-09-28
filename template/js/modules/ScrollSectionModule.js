export default function ScrollSectionModule() {
  const btnPlay = document.querySelector(".blogv .play-btn");
  const road = document.querySelector(".blogv");
  const video = document.querySelector("#blogv-video-youtube iframe");
  let srcVideo = "";
  if (video) {
    srcVideo = video.src;
  }

  if (btnPlay) {
    btnPlay.addEventListener("click", (e) => {
      e.preventDefault();
      road.classList.remove("is-pause");
      road.classList.add("is-play");
      setTimeout(() => {
        road.classList.add("is-play-second");
        setTimeout(() => {
          road.classList.add("is-play-third");
          video.src = `${srcVideo}?autoplay=1`;
        }, 0);
      }, 0);
    });
  }
  if (video) {
    video.onended = function () {
      road.classList.remove("is-play");
      road.classList.remove("is-play-second");
      road.classList.remove("is-play-third");
      road.classList.add("is-pause");
    };
  }
  function bodyPaint() {
    window.addEventListener("scroll", function () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const triggers = document.querySelectorAll("[data-color]");
      const body = document.querySelector(".sec-blogl-block");
      const scroll = scrollTop + window.innerHeight / 3;

      for (var i = 0; i < triggers.length; i++) {
        const trigger = triggers[i];
        const triggerRect = trigger.getBoundingClientRect();
        const triggerRectTop = triggerRect.top + scrollTop;
        const triggerHeight = trigger.offsetHeight;
        const triggerColor = trigger.getAttribute("data-color");
        if (
          triggerRectTop <= scroll &&
          triggerRectTop + triggerHeight > scroll
        ) {
          body.setAttribute("data-paint", triggerColor);
          $(".sec-blogl-block-img .blogl-img img.active").removeClass("active");
          this.document
            .querySelectorAll(".sec-blogl-block-img .blogl-img img")
            [i].classList.add("active");
        }
      }
    });
  }

  bodyPaint();
}
