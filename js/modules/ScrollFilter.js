export default function ScrollFilter() {
    const domainTn = document.querySelectorAll(".domain-tn");
    const domain = document.querySelector(".domain-tn");
    if (domainTn.length > 0 && window.innerWidth < 769) {
        window.onscroll = function () {
            var scrollTop = window.pageYOffset;
            if(scrollTop > 850) {
                domain.classList.add('sticky')
                if(window.innerWidth > 500) {
                    if (scrollTop > 1720) {
                        domain.classList.remove('sticky')
                    }
                }
                if (scrollTop > 2300) {
                    domain.classList.remove('sticky')
                }
            } else {
                domain.classList.remove('sticky')
            }
        }
    }
    
    //show filter domain
    const filterDm = document.querySelector(".filter-dm");
    const closeFilterDm = document.querySelector(".close-dm");
    const body = document.getElementsByTagName("body")[0];
    filterDm.addEventListener('click',function () {
        domain.classList.add('open');
        body.classList.add('no-scroll');
    })
    closeFilterDm.addEventListener('click',function () {
        domain.classList.remove('open')
        body.classList.remove('no-scroll');
    })
}