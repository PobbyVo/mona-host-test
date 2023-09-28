export default function ParticlesModule() {
  let size = 40;
  let eleNum = 10;
  if (window.innerWidth < 1201) {
    size = 20;
    eleNum = 20;
  }

  const particles = document.querySelector("#particles-js");

  if (particles) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: eleNum,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        color: {
          value: ["#2686ED", "#1EC2F5", "#F5851E", "#F51E92", "#7C0FD2"],
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.3,
            sync: false,
          },
        },
        size: {
          value: size,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 550,
          color: "#ffffff",
          opacity: 0.8,
          width: 2,
        },
      },
      retina_detect: true,
    });
  }

  $(document).scroll(function () {
    var st = $(this).scrollTop();
    $(".banner-blog-biggest").css({
      top: -st / 5,
      bottom: st / 5,
    });
  });
  const particles_two = document.querySelector("#particles-js2");
  if (particles_two) {
    particlesJS("particles-js2", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#7479FF", "#FFA51F", "#7C0FD1", "#1EC0F2"],
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 8,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 10,
            sync: false,
          },
        },
      },
      retina_detect: true,
    });
  }
}
