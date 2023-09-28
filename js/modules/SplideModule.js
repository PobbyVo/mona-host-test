export default function SplideModule() {
  if (document.querySelector("#feedback-splide")) {
    var feedback_splide = new Splide("#feedback-splide", {
      type: "loop",
      drag: "free",
      lazyLoad: "nearby",
      perPage: 4,
      speed: 1500,
      pagination: false,
      arrows: false,
      breakpoints: {
        550: {
          perPage: 1,
        },
      },
      // autoScroll: {
      //     speed: 1,
      // },
    }).mount(); // window.splide.Extensions
  }
  if (document.querySelector(".newsfeed_story")) {
    var newsfeed_story = new Splide(".newsfeed_story", {
      type: "loop",
      drag: "free",
      lazyLoad: "nearby",
      perPage: 6,
      speed: 1500,
      pagination: false,
      arrows: false,
      // focus: "center",
      gap: 24,
      breakpoints: {
        550: {
          perPage: 2,
          gap: 12,
        },
        700: {
          perPage: 3,
          gap: 12,
        },
        900: {
          perPage: 4,
          gap: 12,
        },
        1200: {
          perPage: 5,
          gap: 12,
        },
      },
      // autoScroll: {
      //     speed: 1,
      // },
    }).mount();
  }

  const list_payment_host_slider = document.querySelector(".slide-payment");
  if (list_payment_host_slider) {
    var payment_slider = new Splide(".slide-payment", {
      pagination: false,
      autoHeight: true,
      arrows: false,
      gap: "2.4rem",
      rewind: true,
      drag: "free",
      lazyLoad: "nearby",
      updateOnMove: true,
    });
    payment_slider.mount();
  }
  const list_customer = document.querySelector(".slide-customer");
  if (list_customer) {
    var customer = new Splide(".slide-customer", {
      type: "loop",
      pagination: false,
      autoHeight: true,
      gap: "2.4rem",
      rewind: true,
      drag: "free",
      lazyLoad: "nearby",
      updateOnMove: true,
    });
    customer.mount();
  }
}
