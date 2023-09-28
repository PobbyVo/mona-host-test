export default function AddClassModule() {
    const addClass = document.querySelectorAll(".addClass");

    if (addClass.length > 0) {
        function moveArrow() {
            let count = 4000;
            addClass.forEach((ele, index) => {
                if (index == 0) {
                    setTimeout(() => {
                        ele.classList.add("active");

                        setTimeout(() => {
                            ele.classList.remove("active");
                        }, 3600);
                    }, 0);
                } else if (index == 1) {
                    setTimeout(() => {
                        ele.classList.add("active");

                        setTimeout(() => {
                            ele.classList.remove("active");
                        }, 4200);
                    }, 3600);
                } else {
                    setTimeout(() => {
                        ele.classList.add("active");

                        setTimeout(() => {
                            ele.classList.remove("active");
                        }, 3700);
                    }, count + 3600);
                    count = count + 3600;
                }
            });
        }

        moveArrow();

        setInterval(() => {
            moveArrow();
        }, 20000);
    }

    const img = document.querySelector(".progressArrow img");
    const streamItem = document.querySelector(".addClass");

    if (img) {
        img.style.offsetPath = `path('M1 ${streamItem.clientHeight / 2} V${streamItem.clientHeight / 2
            } V-3 H${streamItem.clientWidth} V${streamItem.clientHeight - 6} H${streamItem.clientWidth * 2
            } V-3 H${streamItem.clientWidth * 3 - 1} V${streamItem.clientHeight - 6} H${streamItem.clientWidth * 4 - 2
            } V-3 H${streamItem.clientWidth * 5 - 3} V${streamItem.clientHeight / 2 - 6
            }')`;
    }

    function reveal() {
        var reveals = document.querySelectorAll(".add-active");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = window.innerHeight / 2;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                // reveals[i].classList.remove("active");
            }
        }
    }
    reveal();
    window.addEventListener("scroll", reveal);

    // wd section
    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            (rect.bottom - window.innerHeight / 2) <=
            (window.innerHeight ||
                document.documentElement.clientHeight) /* or $(window).height() */ &&
            rect.right <=
            (window.innerWidth ||
                document.documentElement.clientWidth) /* or $(window).width() */
        );
    }

    // const sticky_content_js_tr = document.querySelector(".sticky-content-js");
    // if (sticky_content_js_tr) {
    //     const item_js_tr = sticky_content_js_tr.querySelectorAll(".wf-section-img-js");

    //     item_js_tr.forEach((ele, i) => {
    //         ele.style.transform = `translate(0%, ${i * 100}%)`;
    //     });
    // }

    // const loading_item = document.querySelector('.loading-item')
    // if (loading_item) {
    //     setTimeout(() => {
    //         loading_item.classList.add('hide')
    //     }, 1000)
    // }

    const item_js = document.querySelectorAll('.wf-section-sticky .item-js')
    function wdSection() {
        var wdSection = document.querySelectorAll(".wdSection-active");
        wdSection.forEach((ele, i) => {
            if (isElementInViewport(ele)) {
                ele.classList.add("active");

                let index = Array.from(wdSection).findIndex(checkFilter);
                function checkFilter(ele) {
                    return ele.classList.contains("active");
                }

                item_js.forEach((i_js, i) => {
                    if (index == i) {
                        i_js.classList.add('active')
                    } else {
                        i_js.classList.remove('active')
                    }
                })

                // const sticky_content_js = document.querySelector(".sticky-content-js");
                // if (sticky_content_js) {
                //     const item_js = sticky_content_js.querySelectorAll(".wf-section-img-js");
                //     if (index == 0) {
                //         item_js.forEach((ele, i) => {
                //             ele.style.transform = `translate(0%, ${i * 100}%)`;
                //         });
                //     }

                //     if (index == 1) {
                //         item_js.forEach((ele, i) => {
                //             ele.style.transform = `translate(0%, ${i * 100 - 100}%)`;
                //         });
                //     }

                //     if (index == 2) {
                //         item_js.forEach((ele, i) => {
                //             ele.style.transform = `translate(0%, ${i * 100 - 200}%)`;
                //         });
                //     }

                //     if (index == 3) {
                //         item_js.forEach((ele, i) => {
                //             ele.style.transform = `translate(0%, ${i * 100 - 300}%)`;
                //         });
                //     }
                // }

            } else {
                ele.classList.remove("active");
            }
        });
    }
    wdSection();
    window.addEventListener("scroll", wdSection);
    // wd section - end

    // add class active
    const configObserver = {
        rootMargin: '-50px -50px -50px -50px',
        threshold: [0, 0.25, 0.75, 1]
    };

    const addActives = document.querySelectorAll('.add-active-js');

    const observerAddActives = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('active')
            } else {
                entry.target.classList.remove('active')
            }
        });
    }, configObserver);

    addActives.forEach(ele => {
        observerAddActives.observe(ele);
    });
}
