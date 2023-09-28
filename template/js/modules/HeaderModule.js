export default function HeaderModule() {
  const hd = document.querySelector(".hd");
  const body = document.querySelector("body");

  // window.onscroll = () => {
  //     if (hd) {
  //         if (window.scrollY > 0) {
  //             hd.classList.add("small");
  //         } else {
  //             hd.classList.remove("small");
  //         }
  //     }
  // }

  (function(){
    if (window.scrollY > 0) {
      hd.classList.add("small", "in");
    } else {
      hd.classList.remove("small", "in");
    }
  })();

  var lastScrollTop = 0;
  var scrollDown = 0;

  window.addEventListener(
    "scroll",
    function () {
      let checkOntouch = document.querySelector(".no-touch");

      if (hd) {
        if (window.scrollY > 0) {
          hd.classList.add("small");
        } else {
          hd.classList.remove("small");
        }

        if (!checkOntouch) {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          var lt = 0;
          if (st >= 300 && st > lastScrollTop) {
            scrollDown = window.pageYOffset;
            // downscroll code
            hd.classList.add("out");
            hd.classList.remove("in");

            body.classList.add("out");
            body.classList.remove("in");

            if (window.innerWidth < 1201) {
              $(".blogf-control").removeClass('active');
              $(".blogfInner").removeClass('active');
            }

            lt = st;
          } else {
            // upscroll code

            if (scrollDown > window.pageYOffset + 125) {
              hd.classList.remove("out");
              hd.classList.add("in");

              body.classList.remove("out");
              body.classList.add("in");
            }
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }
      }
    },
    false
  );
}
