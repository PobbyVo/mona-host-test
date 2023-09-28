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

  // CREATE FLAME PANDA
  const flames = document.querySelectorAll(".flame");

  if (flames.length >= 0) {
    flames.forEach((ele) => {
      const fireFrontContainer = ele.querySelector(".fireFront");
      const fireMidContainer = ele.querySelector(".fireMid");
      const fireBackContainer = ele.querySelector(".fireBack");

      if (window.innerWidth > 1200) {
        var NPFireFront = rand(5, 10);
        var arrayPFireFront = [];
        var NPFireMid = rand(8, 12);
        var arrayPFireMid = [];
        var NPFireBack = rand(15, 25);
        var arrayPFireBack = [];
      } else {
        var NPFireFront = rand(3, 7);
        var arrayPFireFront = [];
        var NPFireMid = rand(4, 8);
        var arrayPFireMid = [];
        var NPFireBack = rand(7, 9);
        var arrayPFireBack = [];
      }

      while (arrayPFireFront.length < NPFireFront) {
        var fireParticle = new FireParticle("front");
        arrayPFireFront.push(fireParticle);
        fireFrontContainer.innerHTML += fireParticle.html;
      }

      while (arrayPFireMid.length < NPFireMid) {
        var fireParticle = new FireParticle("mid");
        arrayPFireMid.push(fireParticle);
        fireMidContainer.innerHTML += fireParticle.html;
      }

      while (arrayPFireBack.length < NPFireBack) {
        var fireParticle = new FireParticle("back");
        arrayPFireBack.push(fireParticle);
        fireBackContainer.innerHTML += fireParticle.html;
      }

      function FireParticle(type) {
        if (type === "front") {
          this.radius = rand(10, 25);
          this.margin = this.radius / 2;
          this.speed = randInt(1, 1.5);
          this.delay = randInt(1, 2);
          this.y = randInt(0.5, 1);
          this.x = randInt(40, 60);
        } else if (type === "mid") {
          this.radius = rand(20, 50);
          this.margin = this.radius / 2;
          this.speed = randInt(0.2, 0.6);
          this.delay = randInt(0.5, 1);
          this.y = randInt(0.25, 0.5);
          this.x = randInt(35, 65);
        } else if (type == "back") {
          this.radius = rand(20, 60);
          this.margin = this.radius / 2;
          this.speed = randInt(0.6, 0.8);
          this.delay = randInt(0, 0.5);
          this.y = randInt(0, 0.5);
          this.x = randInt(35, 65);
        }
        this.html =
          '<span style="width: ' +
          this.radius +
          "px; height: " +
          this.radius +
          "px; left: " +
          this.x +
          "%; bottom: " +
          this.y +
          "%; margin-left: -" +
          this.margin +
          "px; animation-delay: " +
          this.delay +
          "s; animation-speed: " +
          this.speed +
          's"></span>';
      }

      function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      function randInt(min, max) {
        return Math.random() * (max - min) + min;
      }
    });
  }
  // CREATE FLAME PANDA - END

  // REMOVE UNIVERSE
  if (window.innerWidth < 551) {
    const universeBlock = document.querySelector(".universe-block-js");
    if (universeBlock) {
      universeBlock.remove();
    }
  }
  // REMOVE UNIVERSE - END

  // TypingJS
  const isTyped = document.querySelector("#typed-mon");
  if (isTyped) {
    var typed = new Typed("#typed-mon", {
      stringsElement: "#typed-strings",
      typeSpeed: 30,
      showCursor: false,
    });
  }

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
}
