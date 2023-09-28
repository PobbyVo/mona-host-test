export default function CloudHost() {
    // Sticky Section custom
    if(document.querySelector('.horizontal-section-p.style-pri')) {
        const horizontal = document.querySelectorAll('.horizontal-section')
        const field = document.querySelector('.dvs-field')
        if (horizontal.length > 0 && window.innerWidth > 769) {
        window.onscroll = function () {
            var windowWidth = window.innerWidth;
            var scrollTop = window.pageYOffset;
            horizontal.forEach((el) => {
                var elWrap = el.querySelector(".horizontal-scroll");
                var horizontalP = el.closest('.horizontal-section-p');
                var horizontalPpri = el.closest('.horizontal-section-p.style-pri');
    
                var horLength = elWrap.scrollWidth;
                var distFromTop
                if (horizontalP) {
                distFromTop = horizontalP.offsetTop + 55;
                }
    
                if(horizontalPpri) {
                var scrollDistance = distFromTop + horLength - windowWidth;
                }
                else {
                var scrollDistance = distFromTop + horLength + 350 - windowWidth;
                }
                el.style.height = horLength + "px";
                if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
                    elWrap.style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
                }
                
                
            })
        }
    
        }
    }

    if(document.querySelector('.dvs-solve-top-mask')) {
    function charSEO() {
        let items = document.querySelectorAll('.dvs-char-js');
        gsap.registerPlugin(ScrollTrigger);
        items.forEach(function(el) {
            let elId = el.getAttribute('id');
            let parent = el.closest('.dvs-completed-header-js');
            let parentId = parent.getAttribute('id');
            let grandFather = el.closest('.dvs-completed-js')

            if (grandFather) {
            let path = grandFather.querySelector('.svg-scale-js path')
            var l = path.getTotalLength();
            TweenMax.fromTo(path, 3, {strokeDashoffset:l}, {strokeDashoffset:4762.74072265625});
            }
            
            gsap.to("#" + elId, {
                transform: 'translate(2.4rem, -50%) rotate(-15deg)',
                ease: 'none',
                scrollTrigger: {
                    trigger: "#" + parentId,
                    start: 'top 90%',
                    end: 'bottom 80%',
                    scrub: true,
                }
            });
        });
    }
    const sectionElement = document.querySelector('#dvs-completed-js');
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                charSEO()
            }
        });
    });
    observer.observe(sectionElement);
    function dvsSolve() {
        let items = document.querySelectorAll('.dvs-solve-js');
        gsap.registerPlugin(ScrollTrigger);
        items.forEach(function(el) {
        let elId = el.getAttribute('id');
        let parent = el.closest('.dvs-solve-top-list-js');
        let parentId = parent.getAttribute('id');
            
            gsap.to("#" + elId, {
                transform: 'translate(0, 0)',
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: "#" + parentId,
                    start: 'top 90%',
                    end: 'bottom 80%',
                    scrub: true,
                }
            });
        });
    }
    const sectionSolve = document.querySelector('#dvs-solve-top-list-js');
    const observerSolve = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dvsSolve()
            }
        });
    });
    observerSolve.observe(sectionSolve);
    }
}