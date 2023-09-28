export default function GsapModule() {

    if (window.innerWidth > 1200) {
        // let wdSlideContainer = document.querySelector('#wd-slide-container')
        // /* SMOOTH SCROLL */
        // // const scroller = new LocomotiveScroll({
        // //     el: wdSlideContainer,
        // //     smooth: true
        // // });

        // const wdSlideItems = gsap.utils.toArray("#wd-slide-container .wd-slide-item");
        // gsap.to(wdSlideItems, {
        //     xPercent: -100 * ( wdSlideItems.length - 1 ),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: "#wd-slide-container",
        //         pin: true,
        //         start: "top top",
        //         scrub: 1,
        //         // snap: {
        //         //     snapTo: 1 / (wdSlideItems.length - 1),
        //         //     inertia: true,
        //         //     duration: {min: 0.1, max: 0.1}
        //         //     // delay: 0,
        //         //     // ease: "power1.inOut"
        //         // },
        //         end: () =>  "+=" + (wdSlideContainer.offsetWidth - innerWidth)
        //     }
        // });
    }

    // gsap.registerPlugin(ScrollTrigger);

    // const scroller = document.querySelector("#scroll-container");

    // const locoScroll = new LocomotiveScroll({
    // el: scroller,
    // smooth: true
    // });
    // locoScroll.on("scroll", ScrollTrigger.update);

    // ScrollTrigger.scrollerProxy(scroller, {
    // scrollTop(value) {
    //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    // },
    // getBoundingClientRect() {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    // },
    // pinType: scroller.style.transform ? "transform" : "fixed"
    // });

    // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    var x = document.querySelectorAll(".lms-ani-stars");

    if (x.length > 0 && window.innerWidth > 1368) {
        x.forEach((element) => {
            var star = [];
            function stars() {
                for (var i = 1; i <= 3; i++) {
                    star[i] = document.createElement("span");
                    star[i].className = "star" + i;
                    star[i].style.left = Math.floor(Math.random() * 99 + 1) + "%";
                    star[i].style.bottom = Math.floor(Math.random() * 199 - 99) + "%";
                    element.appendChild(star[i]);
                }
            }
            function cStars(ilosc) {
                for (var i = 1; i <= ilosc; i++) {
                    stars();
                }
            }
            cStars(100);
        });
    }
}