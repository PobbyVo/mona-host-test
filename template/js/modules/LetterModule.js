export default function LetterModule() {
  const letter_animation = document.querySelectorAll(".letter-animation");
  letter_animation.forEach((item) => {
    const menuLinks = item.querySelector(".letter-ani");
    let arrTxt = menuLinks.textContent.trim().split("");
    let txtFinal = "";
    arrTxt.forEach((letter, i) => {
      let delay;
      delay = i * 0.04;
      txtFinal += `${
        letter != " "
          ? `<span style="animation-delay:${delay}s" class="charr">${letter}</span>`
          : "<span>&nbsp</span>"
      }`;
    });
    menuLinks.innerHTML = `<span class="txt-wrap">${txtFinal}</span>`;
  });
  function initparticles() {
    hearts();
    confetti();
  }
  function hearts() {
    $.each($(".hearts"), function () {
      var heartcount = ($(this).width() / 50);
      for (var i = 0; i <= heartcount; i++) {
        var size = $.rnd(60, 120) / 10;
        $(this).append(
          '<span class="particle" style="top:' +
            $.rnd(20, 80) +
            "%; left:" +
            $.rnd(0, 95) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  }
  function confetti() {
    $.each($(".confetti"), function () {
      var confetticount = ($(this).width() / 50) * 10;
      for (var i = 0; i <= confetticount; i++) {
        $(this).append(
          '<span class="particle c' +
            $.rnd(1, 4) +
            '" style="top:' +
            $.rnd(10, 50) +
            "%; left:" +
            $.rnd(0, 100) +
            "%;width:" +
            $.rnd(6, 8) +
            "px; height:" +
            $.rnd(3, 4) +
            "px;animation-delay: " +
            $.rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  }
  jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  };

  initparticles();
  function rssSetDuration() {
    const rssDuration = $(".dwebt-gr").length * 8 + "s";
    $(".dwebt-gr").css("animationDuration", rssDuration);
    $(".dwebt-gr").show(); // IE recalculate fix
  }

  $(window).on("load", function () {
    rssSetDuration();
  });
}
