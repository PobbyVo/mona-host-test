export default function RandomColorModule() {
  const abslide_sw = document.querySelectorAll(".abslide-sw .swiper-slide");
  if (abslide_sw) {
    abslide_sw.forEach((item) => {
      const abslide_py = document.querySelectorAll(".abslide-py");
      abslide_py.forEach((item_inner) => {
        item_inner.addEventListener("mouseover", () => {
          item.classList.add("show");
        });
        item_inner.addEventListener("mouseout", () => {
          item.classList.remove("show");
        });
      });
    });
  }
  const parallax = document.querySelector(".abslide");
  if (parallax) {
    const item = parallax.querySelectorAll(".abslide-py");
    item.forEach((el) => {
      const _w = el.offsetWidth;
      const _h = el.offsetHeight;
      const img = el.querySelector(".abslide-img");
      el.addEventListener("mousemove", (e) => {
        const _x = e.offsetX;
        const _y = e.offsetY;

        const X = (_x - _w / 2) / 50;
        const Y = (_y - _h / 2) / 50;

        img.style.transform = `translate(` + X + `px,` + Y + `px)`;
      });
      el.addEventListener("mouseleave", () => {
        img.style.transform = `none`;
      });
    });
  }
  // Cusor
  $(document).ready(function () {
    $(this).mousemove(function (e) {
      if (!e.target.closest(".abslide-img")) {
        $(".sec-abslide .cursor-custom").removeClass("show");
      } else {
        $(".sec-abslide .cursor-custom").addClass("show");
      }
      if ($(window).width() > 1500) {
        $(".sec-abslide .cursor-custom").css({
          top: e.pageY - 20,
          left: e.pageX - 20,
        });
      } else {
        $(".sec-abslide .cursor-custom").css({
          top: e.pageY - 20,
          left: e.pageX - 20,
        });
      }
    });
  });
  $(".abslide-control").click(function () {
    document.querySelector(".abslide-control").classList.toggle("active");
  });
  // scroll add class
  function reveal() {
    var reveals = document.querySelectorAll(".ani");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
      }
    }
  }
  reveal();
  window.addEventListener("scroll", reveal);
}
