export default function MagicScrollModule() {
    // function isScrolledIntoView(elem) {
    //     var docViewTop = $(window).scrollTop();
    //     var docViewBottom = docViewTop + $(window).height();

    //     var elemTop = $(elem).offset().top;
    //     var elemBottom = elemTop + $(elem).height();

    //     return ((elemBottom <= docViewBottom * 1.5) && (elemTop >= docViewTop / 1.5));
    // }

    // const wdIntoViews = document.querySelectorAll('.wdIntoView')
    // let scale = []

    // if (wdIntoViews.length > 0) {
    //     wdIntoViews.forEach((wdIntoView, i) => {
    //         scale.push(i)
    //         window.addEventListener('wheel', (e) => {
    //             let windowTop = $(window).scrollTop();

    //             // console.log(windowTop);
    //             // console.log(wdIntoView.getBoundingClientRect().bottom);

    //             if (windowTop >= wdIntoView.getBoundingClientRect().top) {
    //                 if (e.deltaY > 0) {
    //                     // console.log('Down')
    //                     // console.log(i);

    //                     // scale[i] = 3
    //                     // let wdContent = wdIntoView.querySelector('.wdContentJS')

    //                     // if (scale[i] < 4 && scale[i] > 0) {
    //                     //     scale[i] -= 1
    //                     // }

    //                     // console.log(scale[i]);

    //                     // if (wdContent && scale[i] > 0) {
    //                     //     wdContent.style.transform = `scale(${scale[i]})`
    //                     // }
    //                 } else {
    //                     // console.log('Up')

    //                     // scale[i] = 3
    //                     // let wdContent = wdIntoView.querySelector('.wdContentJS')

    //                     // if (scale[i] > 0 && scale[i] < 3) {
    //                     //     scale[i] += 1
    //                     // }

    //                     // if (wdContent && scale[i] < 4) {
    //                     //     wdContent.style.transform = `scale(${scale[i]})`
    //                     // }
    //                 }
    //             }
    //         })
    //     })
    // }

    let kimthanhGsapDowns = document.querySelectorAll('.kt-gsap-fade-down')
    let kimthanhGsapUps = document.querySelectorAll('.kt-gsap-fade-up')

    // if (kimthanhGsapDowns.length > 0) {
    //   kimthanhGsapDowns.forEach((ele, i) => {
    //     gsap.set(ele, {
    //       y: -70,
    //     });
    //     gsap.to(ele, {
    //       scrollTrigger: {
    //         trigger: ".kim-thanh",
    //         scrub: 2,
    //       },
    //       y: 0,
    //     });
    //   })
    // }

    // if (kimthanhGsapUps.length > 0) {
    //   kimthanhGsapUps.forEach((ele, i) => {
    //     gsap.set(ele, {
    //       y: 70,
    //     });
    //     gsap.to(ele, {
    //       scrollTrigger: {
    //         trigger: ".kim-thanh",
    //         scrub: 2,
    //       },
    //       y: 0,
    //     });
    //   })
    // }

    // let gsapDowns = document.querySelectorAll('.gsap-fade-down')
    // let gsapUps = document.querySelectorAll('.gsap-fade-up')

    // if (gsapDowns.length > 0) {
    //   gsapDowns.forEach((ele, i) => {
    //     gsap.set(ele, {
    //       y: -70,
    //     });
    //     gsap.to(ele, {
    //       scrollTrigger: {
    //         trigger: ".levents",
    //         scrub: 2,
    //       },
    //       y: 0,
    //     });
    //   })
    // }

    // if (gsapUps.length > 0) {
    //   gsapUps.forEach((ele, i) => {
    //     gsap.set(ele, {
    //       y: 70,
    //     });
    //     gsap.to(ele, {
    //       scrollTrigger: {
    //         trigger: ".levents",
    //         scrub: 2,
    //       },
    //       y: 0,
    //     });
    //   })
    // }

    const cirs = document.querySelectorAll('.cir');
    var timer = Array;

    function randomXY(cir, x, y) {
        if (!x) {
            x = 10;
        }
        if (!y) {
            y = 15;
        }
        if (cir.classList.contains('cir-2')) {
            const translateX = Math.floor(Math.random() * x);
            const translateY = Math.floor(Math.random() * y);
            cir.style.transform = `translate(${translateX + "%" + "," + translateY + "%"})`;
        } else {
            // const translateX = Math.floor(Math.random() * 10);
            const translateY = Math.floor(Math.random() * y);
            // cir.style.transform = `translate(${translateX + "%" + "," + translateY + "%"})`;
            cir.style.transform = `translate(${0 + "%" + "," + -translateY + "%"})`;
        }
    }
    for (let i = 0; i < cirs.length; i++) {
        let time = (i % 3) * 200 + 1500;
        const x = parseInt(cirs[i].getAttribute('data-x'))
        const y = parseInt(cirs[i].getAttribute('data-y'))
        timer[i] = setInterval(() => {
            randomXY(cirs[i], x, y);
        }, time);
    }
}