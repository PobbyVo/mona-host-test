export default function CategoryModule() {
  const cateBtn = document.querySelector(".categoriesBtn");
  const asideClose = document.querySelector(".asideClose");
  const asideCate = document.querySelector(".asideCate");
  const bgPageOut = document.querySelector(".bgPageOut");
  const body = document.querySelector("body");
  const hd = document.querySelector(".hd");

  if (cateBtn) {
    cateBtn.onclick = () => {
      asideCate.classList.add("active");
      bgPageOut.classList.add("active");
      body.classList.add("no-scroll");
      hd.classList.add("out");
    };

    asideClose.onclick = () => {
      closeCate();
    };

    bgPageOut.onclick = () => {
      closeCate();
    };
  }

  function closeCate() {
    asideCate.classList.remove("active");
    bgPageOut.classList.remove("active");
    body.classList.remove("no-scroll");
  }

  // Show/Hide category button

  $(window).scroll(function () {
    if (cateBtn) {
      if (isScrolledIntoView(cateBtn)) {
        cateBtn.classList.add("active");
      } else {
        cateBtn.classList.remove("active");
      }
    }
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(".blogContent").offset().top;
    var docViewBottom = docViewTop + $(".blogContent").height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  // if (shareBottom) {
  //     if (isScrolledIntoView(shareBottom)) {
  //         shareFixed.classList.add('hide')
  //     } else {
  //         shareFixed.classList.remove('hide')
  //     }
  // }
}
