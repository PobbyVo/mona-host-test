export default function DropDownModule() {
    const clBlock = document.querySelectorAll(".collapse-block");
  
    if (clBlock) {
      clBlock.forEach((item) => {
        const clBody = item.querySelectorAll(".collapse-body");
        const clItems = item.querySelectorAll(".collapse-item");
  
        if (clBody) {
          $(clBody[0]).slideDown();
          clBody[0].parentElement.classList.add("active");
        }
        const head = item.querySelectorAll(".collapse-head");
        head.forEach((item) => {
          item.addEventListener("click", () => {
            clBody.forEach((item) => {
              $(item).slideUp();
            });
            clItems.forEach((item) => {
              $(item).removeClass("active");
            });
            const body = item.parentElement.querySelector(".collapse-body");
            if (body.style.display == "none" || body.style.display == "") {
              $(body).slideDown();
              $(item.parentElement).addClass("active");
            } else {
              $(body).slideUp();
              $(item.parentElement).removeClass("active");
            }
          });
        });
      });
    }

    const domainDrop = document.querySelector(".domain-drop");
    if (domainDrop) {
      	domainDrop.addEventListener("click", (e) => {
			e.preventDefault();
			$(domainDrop.parentElement.parentElement).toggleClass("active");
		});
    }
  }
  