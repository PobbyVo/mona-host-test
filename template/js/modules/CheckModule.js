export default function CheckModule() {
  const recheckBlocks = document.querySelectorAll(".recheck-block");
  if (recheckBlocks) {
    recheckBlocks.forEach((item) => {
      const recheckItems = item.querySelectorAll(".recheck-item");
      const recheckInputs = item.querySelectorAll(".recheck-input");

      recheckItems.forEach((item) => {
        item.addEventListener("click", () => {
          const input = item.querySelector(".recheck-input");
          if (input.type == "radio") {
            recheckInputs.forEach((item) => {
              item.checked = false;
            });
            input.checked = true;
          }
          if (input.type == "checkbox") {
            if (input.checked == true) {
              input.checked = false;
            } else {
              input.checked = true;
            }
          }
          var event = new Event("change");
          input.dispatchEvent(event);
        });
      });
    });
  }
  $(document).ready(function () {
    $(".blogf-control").click(function (e) {
      e.stopPropagation()
      // $(".blogf-menu-inner").slideToggle();
      $(".blogf-menu-inner").toggleClass('active');
      console.log($(".blogf-menu-inner"));
      $(this).toggleClass("active");

      if(window.innerWidth < 1200) {
        $('body').toggleClass('no-scroll');
      }
    });
  });

  $('body').click((function () {
    if($(".blogf-menu-inner").hasClass('active')) {
      $(".blogf-menu-inner").removeClass('active');
      $('body').removeClass('no-scroll');
    }
  }))

  $('#monaDemoCategories').click(function (e) {
    e.stopPropagation()
  })

  // window.addEventListener('mouseup',function(event) {
  //   var pol = document.getElementById('monaDemoCategories');
  //   console.log(event.target != pol && event.target.parentNode != pol);
  //   if (event.target != pol && event.target.parentNode != pol) {
  //     var blogf = document.querySelector('.blogf-menu-inner');
  //     blogf.classList.remove('active')
  //   }
  // });

  function getWidth() {
    const getWidthItems = document.querySelectorAll(".getWidth");
    if (getWidthItems) {
        getWidthItems.forEach((item) => {
            item.style = `--width:${item.getBoundingClientRect().width}px`;
        });
    }
  }
  getWidth();
  window.addEventListener("resize", () => {
      getWidth();
  });
}
