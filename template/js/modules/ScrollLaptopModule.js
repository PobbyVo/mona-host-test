export default function ScrollLaptopModule() {
  // scroll
  const bannerWD = document.querySelector('.bannerWD')
  const laptopWr = document.querySelector(".banner-tkw-laptop");
  const lapRender = document.querySelector('.lap-render')
  let imgs = 61;

  if (lapRender) {
    for (let n = 0; n < imgs; n++) {
      let link = '000' + n;
      lapRender.innerHTML += `<img src="../template/assets/images/laptop/large_` + link.slice(-4) + `.jpg"/>`;
    }
  }

  if (laptopWr) {
    const imgAni = laptopWr.querySelectorAll("img");
    const laptopVideo = laptopWr.querySelector(".banner-tkw-laptop-vd");
    // const link_ytb = `https://www.youtube.com/embed/C3QKB74zaD8?autoplay=1&mute=1&loop=1&playlist=C3QKB74zaD8`

    const iframe = `<iframe class="laptop-ytb" width="560" height="315"
    src="https://www.youtube.com/embed/C3QKB74zaD8?autoplay=1&mute=1&loop=1&playlist=C3QKB74zaD8"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`

    const iframeMobile = `<iframe class="laptop-ytb" width="560" height="315"
    src="https://www.youtube.com/embed/C3QKB74zaD8?autoplay=1&playlist=C3QKB74zaD8"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`

    function removeIframe() {
      const hasIframe = laptopVideo.querySelector('.laptop-ytb')
      if (hasIframe) {
        hasIframe.remove()
      }
    }

    function addIframe() {
      laptopVideo.classList.add('show');
      const hasIframe = laptopVideo.querySelector('.laptop-ytb')
      if (!hasIframe) {
        laptopVideo.innerHTML = iframeMobile
      }
    }

    if (window.innerWidth < 1201) {
      for(let i = 0; i < imgs; i++) {
        setTimeout(() => {
          imgAni[i].style.opacity = '1';
          if (i == imgs - 1) {
            laptopVideo.classList.add('show');
            const hasIframe = laptopVideo.querySelector('.laptop-ytb')
            if (!hasIframe) {
              laptopVideo.innerHTML = iframeMobile
            }
          }
        }, i*40)
      }

      window.addEventListener('scroll', () => {
        if (window.scrollY < bannerWD.clientHeight) {
          addIframe()
        } else {
          removeIframe()
        }
      })

    } else {
      window.addEventListener('scroll', () => {
        if (window.scrollY < bannerWD.clientHeight) {
          let trigger = laptopWr.getBoundingClientRect().top;
  
          if (trigger < 0 && trigger > -500) {
            // animate
            imgAni.forEach((el) => {
              el.style.opacity = '0';
            });
            let pos = Math.round(-(trigger / 700) * imgs);

            imgAni[pos].style.opacity = '1';
      
            laptopVideo.classList.remove('show');

            removeIframe()
          } else if (trigger <= - 500) {
            imgAni.forEach((el) => {
              el.style.opacity = '0';
            });
            imgAni[imgs - 1].style.opacity = '1';
      
            laptopVideo.classList.add('show');
            const hasIframe = laptopVideo.querySelector('.laptop-ytb')
            if (!hasIframe) {
              laptopVideo.innerHTML = iframe
            }
            // laptopVideo.querySelector('iframe').src = link_ytb
          }
          
          //end
  
          if (window.scrollY < 100) {
            imgAni.forEach((el) => {
              el.style.opacity = '0';
            });
            imgAni[0].style.opacity = '1';
      
            laptopVideo.classList.remove('show');
          }
        } else {
          removeIframe()
        }
      });
    }
  }
}
