export default function TxtTrimModule() {
  let textTrims = document.querySelectorAll(".txtAni");
  textTrims.forEach((textTrim) => {
    textTrim.classList.add("show");
    let newTexts = textTrim.innerHTML.split(" ");

    textTrim.innerHTML = "";
    newTexts.forEach((newText) => {
      let newTextSmalls = newText.split();

      if (newText == "<br>") {
        textTrim.innerHTML += `${newText}`;
      } else {
        newTextSmalls.forEach((newTextSmall) => {
          textTrim.innerHTML += `<span class="char">${newTextSmall}</span>&nbsp`;
        });

        const chars = document.querySelectorAll(".char");
        chars.forEach((char, i) => {
          setTimeout(() => {
            char.classList.add("move");
          }, i * 100);
        });
      }
    });

    // let newTexts = textTrim.textContent.trim().split("");
    // textTrim.innerHTML = '';
    // newTexts.forEach((newText) => {
    //     if (newText == ' ') {
    //         textTrim.innerHTML += `<p><span class="char">&nbsp;</span></p>`;
    //     } else {
    //         textTrim.innerHTML += `<p><span class="char">${newText}</span></p>`;
    //     }
    // })
    // let spans = textTrim.querySelectorAll('span')
    // spans.forEach((span, index) => {
    //     // span.classList.add('run')
    //     let delay = index * 0.1;
    //     span.style.animationDelay = `${delay}s`
    // })
  });

  let banTrims = document.querySelectorAll(".txtAniBan");

  if (banTrims.length > 0) {
    banTrims.forEach((banTrim) => {
      let newTexts = banTrim.textContent.trim().split("");
      banTrim.innerHTML = "";
      newTexts.forEach((newText) => {
        if (newText == " ") {
          banTrim.innerHTML += `<p><span class="char">&nbsp;</span></p>`;
        } else {
          banTrim.innerHTML += `<p><span class="char">${newText}</span></p>`;
        }
      });
      let spans = banTrim.querySelectorAll("span");
      spans.forEach((span, index) => {
        // span.classList.add('run')
        let delay = index * 0.13;
        span.style.animationDelay = `${delay}s`;
      });
    });
  }

  if (window.innerWidth > 1200) {
    // effect text
    const splittings = document.querySelectorAll(".splitting");

    if (splittings.length > 0) {
      function runChar() {
        splittings.forEach((splitting) => {
          if ($(window).scrollTop() > $(splitting).offset().top - 800) {
            const chars = splitting.querySelectorAll(".char");
            chars.forEach((char, i) => {
              setTimeout(() => {
                char.classList.add("move");
              }, i * 70);
            });
          }
        });
      }
      console.log(splittings);

      runChar();

      window.addEventListener("scroll", runChar);
    }

    // effect line logo
    const lineAnis = document.querySelectorAll(".lineAni");

    if (lineAnis.length > 0) {
      function runLine() {
        lineAnis.forEach((lineAni) => {
          if ($(window).scrollTop() > $(lineAni).offset().top - 900) {
            lineAni.classList.add("active");
          }
        });
      }

      runLine();

      window.addEventListener("scroll", runLine);
    }

    const scrollSections = document.querySelectorAll(".scrollSection");

    if (scrollSections.length > 0) {
      function runScroll() {
        scrollSections.forEach((scrollSection, i) => {
          if ($(window).scrollTop() > $(scrollSection).offset().top - 500) {
            scrollSection.classList.add("active");
          }
        });
      }
      runScroll();

      window.addEventListener("scroll", runScroll);
    }
  }

  let txt = document.querySelectorAll(".roundTxt");
  txt.forEach((v) => {
    let arr = v.textContent.split("");
    v.innerHTML = "";
    arr.forEach((av) => {
      v.innerHTML += `<div class="letter">` + av + `</div>`;
    });
    let letter = v.querySelectorAll(".letter");
    letter.forEach((lv, li) => {
      let deg = -(li * 10 - 60);
      let delay = li * 0.1;
      lv.style.transform = `rotate(` + deg + `deg)`;
      lv.style.animationDelay = delay + `s`;
    });
  });

  const isInterViews = document.querySelectorAll(".isInterView");
  if (isInterViews.length > 0) {
    function runScroll() {
      isInterViews.forEach((isInterView, i) => {
        if ($(window).scrollTop() > $(isInterView).offset().top - 500) {
          isInterView.classList.add("active");
        }
      });
    }
    runScroll();

    window.addEventListener("scroll", runScroll);
  }
}
