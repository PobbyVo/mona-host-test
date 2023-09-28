export default function HomeAnimationModule() {
  // RANDOM STAR
  let numstars = 5;

  function generateStar() {
    let starRenders = document.querySelectorAll(".star-render");

    if (starRenders.length > 0) {
      starRenders.forEach((starRender) => {
        for (let i = 0; i < numstars; i++) {
          starRender.innerHTML += `<div class="star"><img src="./assets/images/home-star.png" alt=""></div>`;

          let spans = starRender.querySelectorAll(".star");
          spans.forEach((span, index) => {
            // span.classList.add('run')
            let img = span.querySelector("img");
            let delay = Math.floor(Math.random() * 5);
            img.style.animationDelay = `${delay}s`;
          });
        }
      });
    }
  }

  if (window.innerWidth > 550) {
    generateStar();
  }
  // RANDOM STAR - END

  // RANDOM STARS
  var opt;
  var def = {
    radius_x: 500,
    radius_y: 250,
  };
  if (opt) {
    var i;

    for (i in def) {
      if (!opt[i]) {
        opt[i] = def[i];
      }
    }
  } else {
    opt = def;
  }

  var sqrt = Math.sqrt,
    cos = Math.cos,
    sin = Math.sin;

  var starRenders = document.querySelectorAll(".star-render");
  if (starRenders.length > 0) {
    starRenders.forEach((starRender) => {
      var gal_width = starRender.offsetWidth;
      var gal_height = starRender.offsetHeight;

      var el_points = pointsOnRect(numstars, opt.radius_x, opt.radius_y);

      function pointsOnRect(n, xr, yr, zr) {
        var pts = [],
          inc = Math.PI * (3 - sqrt(5)),
          off = 2 / n,
          i,
          y,
          r,
          phi;

        for (i = 0; i < n; ++i) {
          y = i * off - 1 + off / 2;
          r = sqrt(1 - y * y);
          phi = i * inc;
          pts.push([cos(phi) * r * xr, y * yr, sin(phi) * r * zr]);
        }

        return pts;
      }

      let starItem = starRender.querySelectorAll(".star");
      function generateTranslate(i) {
        if (starItem) {
          var el_w2 = starItem[i].offsetWidth / 2,
            el_h2 = starItem[i].offsetHeight / 2,
            w2 = gal_width / 2,
            h2 = gal_height / 2;
          return (
            "translate3d(" +
            ((w2 + el_points[i][0] - el_w2) | 0) +
            "px," +
            ((h2 + el_points[i][1] - el_h2) | 0) +
            "px," +
            el_points[i][0] +
            "px)"
          );
        }
      }

      function setTransform(i, value) {
        var el = starItem[i];
        el.style.transform = value;
      }

      function drawStar() {
        var i = numstars,
          value;

        while (i--) {
          value = generateTranslate(i);

          setTransform(i, value);
          //   setOpacity(i);
        }
      }

      if (window.innerWidth > 550) {
        drawStar();
      }
    });
  }
  // RANDOM STARS - END

  // RANDOM SMOKE'S ROCKET
  if (window.innerWidth > 1200) {
    let numfires = 8;
    for (let i = 0; i <= numfires; i++) {
      const fireRenders = document.querySelectorAll(".ani-fire-render");

      if (fireRenders.length > 0) {
        fireRenders.forEach((fireRender) => {
          fireRender.innerHTML += `<span class="ani-fire"><span class="fire"></span></span>`;

          let aniFires = fireRender.querySelectorAll(".ani-fire");
          aniFires.forEach((ele, index) => {
            let delay = Math.floor(Math.random() * 5);
            ele.style.animationDelay = `${delay}s`;

            function randomXY(ele) {
              const translateX = Math.floor(Math.random() * 200);
              const translateY = Math.floor(Math.random() * 200);
              ele.style.transform = `translate(${
                translateX + "%" + "," + translateY + "%"
              })`;
            }

            randomXY(ele);
          });

          let fires = fireRender.querySelectorAll(".fire");
          fires.forEach((ele, index) => {
            let delay = Math.floor(Math.random() * 5);
            ele.style.animationDelay = `${delay}s`;
          });
        });
      }
    }
  }
  // RANDOM SMOKE'S ROCKET - END

  //
  // const decorGroup = document.querySelector(".img-decor-group-js");
  // let step = 1;
  // if (decorGroup) {
  //   window.onscroll = () => {
  //     decorGroup.classList.add("hide");
  //     // step = step - 0.2
  //     // if (step >= 0) {
  //     //   decorGroup.style.transform = `translate(-50%, -50%) scale(${step})`
  //     // }
  //   };
  // }

  jQuery(document).ready(function ($) {
    $(".marquee").each(function (i, v) {
      $(this).marquee({
        duration: 12500,
        duplicated: true,
        gap: "24px",
        startVisible: true,
      });
    });
  });

  // REMOVE UNIVERSE
  if (window.innerWidth < 551) {
    const universeBlock = document.querySelector(".universe-block-js");
    if (universeBlock) {
      universeBlock.remove();
    }
  }
  // REMOVE UNIVERSE - END

  // TypingJS
  // const isTyped = document.querySelector("#typed-mon");
  // if (isTyped) {
  //   var typed = new Typed("#typed-mon", {
  //     stringsElement: "#typed-strings",
  //     typeSpeed: 30,
  //     showCursor: false,
  //   });
  // }

  // Sticky Section with Horizontal Scrolling

  const horizontals = document.querySelectorAll(".horizontal-section");
  const fieldP = document.querySelector(".dvs-field");

  if (horizontals.length > 0 && window.innerWidth > 769) {
    window.onscroll = function () {
      var windowWidth = window.innerWidth;
      var scrollTop = window.pageYOffset;

      horizontals.forEach((el) => {
        // var wrap = document.querySelector(el);
        var elWrap = el.querySelector(".horizontal-scroll");
        var horizontalP = el.closest(".horizontal-section-p");

        var horLength = elWrap.scrollWidth;
        var distFromTop;
        if (horizontalP) {
          distFromTop = horizontalP.offsetTop + 550;
          if (window.matchMedia("(orientation: portrait)").matches) {
            distFromTop = horizontalP.offsetTop - 400;
          }
        }
        var scrollDistance = distFromTop + horLength + 350 - windowWidth;
        el.style.height = horLength + "px";

        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
          elWrap.style.transform =
            "translateX(-" + (scrollTop - distFromTop) + "px)";
        }
      });
    };
  }

  // Sticky Section custom
  if (document.querySelector(".horizontal-section-p.style-pri")) {
    const horizontal = document.querySelectorAll(".horizontal-section");
    const field = document.querySelector(".dvs-field");
    if (horizontal.length > 0 && window.innerWidth > 769) {
      window.onscroll = function () {
        var windowWidth = window.innerWidth;
        var scrollTop = window.pageYOffset;
        horizontal.forEach((el) => {
          var elWrap = el.querySelector(".horizontal-scroll");
          var horizontalP = el.closest(".horizontal-section-p");
          var horizontalPpri = el.closest(".horizontal-section-p.style-pri");

          var horLength = elWrap.scrollWidth;
          var distFromTop;
          if (horizontalP) {
            distFromTop = horizontalP.offsetTop + 550;
            if (window.matchMedia("(orientation: portrait)").matches) {
              distFromTop = horizontalP.offsetTop - 400;
            }
          }

          if (horizontalPpri) {
            var scrollDistance = distFromTop + horLength - windowWidth;
          } else {
            var scrollDistance = distFromTop + horLength + 350 - windowWidth;
          }

          el.style.height = horLength + "px";
          if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
            elWrap.style.transform =
              "translateX(-" + (scrollTop - distFromTop) + "px)";
              const decorAb = document.querySelector(".clhser-decor-img");
              if(decorAb) {
                decorAb.classList.add('scale');
              }
          }
        });

      };
    }
  }

  
  const seoPage = document.querySelector('.seo-page')
  if (window.innerWidth > 1201 && seoPage) {
    function charSEO() {
      let items = document.querySelectorAll('.dvs-char-js');
        gsap.registerPlugin(ScrollTrigger);
        items.forEach(function(el) {
          let elId = el.getAttribute('id');
          let parent = el.closest('.dvs-completed-header-js');
          let parentId = parent.getAttribute('id');
          let grandFather = el.closest('.dvs-completed-js')

          if (grandFather) {
            let path = grandFather.querySelector('.svg-scale-js path')
            var l = path.getTotalLength();
            TweenMax.fromTo(path, 3, {strokeDashoffset:l}, {strokeDashoffset:4762.74072265625});
          }
            
            gsap.to("#" + elId, {
                transform: 'translate(2.4rem, -50%) rotate(-15deg)',
                ease: 'none',
                scrollTrigger: {
                    trigger: "#" + parentId,
                    start: 'top 90%',
                    end: 'bottom 80%',
                    scrub: true,
                }
            });
        });
    }
  
    const sectionElement = document.querySelector('#dvs-completed-js');
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              charSEO()
            }
        });
    });
    observer.observe(sectionElement);

    // DVS EXP
    function dvsExp() {
      let items = document.querySelectorAll('.dvs-exp-item-js');
      gsap.registerPlugin(ScrollTrigger);
      items.forEach(function(el) {
        let elId = el.getAttribute('id');
        let parent = el.closest('.dvs-exp-num-pc-js');
        let parentId = parent.getAttribute('id');
          
          gsap.to("#" + elId, {
              transform: 'translate(0, 0)',
              ease: 'none',
              scrollTrigger: {
                  trigger: "#" + parentId,
                  start: 'top 90%',
                  end: 'bottom 80%',
                  scrub: true,
              }
          });
      });
    }

    const sectionExp = document.querySelector('#dvs-exp-num-pc-js');
    const observerExp = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              dvsExp()
            }
        });
    });
    observerExp.observe(sectionExp);

    // DVS SOLVE
    function dvsSolve() {
      let items = document.querySelectorAll('.dvs-solve-js');
      gsap.registerPlugin(ScrollTrigger);
      items.forEach(function(el) {
        let elId = el.getAttribute('id');
        let parent = el.closest('.dvs-solve-top-list-js');
        let parentId = parent.getAttribute('id');
          
          gsap.to("#" + elId, {
              transform: 'translate(0, 0)',
              ease: 'power1.out',
              scrollTrigger: {
                  trigger: "#" + parentId,
                  start: 'top 90%',
                  end: 'bottom 80%',
                  scrub: true,
              }
          });
      });
    }

    const sectionSolve = document.querySelector('#dvs-solve-top-list-js');
    const observerSolve = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              dvsSolve()
            }
        });
    });
    observerSolve.observe(sectionSolve);
  }
}
