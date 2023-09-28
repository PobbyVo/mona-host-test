import { CheckDeviceModule } from "./CheckDeviceModule.js"

export default function MenuModule() {
    const menuBars = document.querySelectorAll('.hdBar')
    const hdMenu = document.querySelector('.hdMenu')
    const menuItems = document.querySelectorAll('.menu-item-ani');
    const menuClose = document.querySelector('.menuClose')
    const bgPage = document.querySelector('.bgPage')
    const btnSubs = document.querySelectorAll('.subBtn');
    const body = document.querySelector('body');

    window.addEventListener("resize", () => {
        // if (window.innerWidth >= 1201) {
        //     closeMenu();
        // }
        // CheckDeviceModule()

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    })

    if (menuBars.length > 0) {
        menuBars.forEach((menuBar) => {
            menuBar.onclick = (e) => {
                e.stopPropagation()
                let vh = window.innerHeight * 0.01;
                menuBars.forEach((ele) => {
                    ele.classList.toggle('active')
                    let path = ele.querySelector('.path-2')
                    if (path && ele.classList.contains('active')) {
                        path.setAttribute('d', 'm 30,50 h 40')
                    } else {
                        path.setAttribute('d', 'm 50,50 h 20')
                    }
                })
                document.documentElement.style.setProperty("--vh", `${vh}px`);
                hdMenu.classList.toggle('active')
                bgPage.classList.toggle('active')
                body.classList.toggle('no-scroll')

                $('.mega-menu-child-js').removeClass('active')
                $('.mega-menu-child-js').removeClass('active')
                
                $('.mega-menu-pop-js.active').removeClass('active')
                $('.mega-sub-js.active').removeClass('active')
                $('.mega-menu-sub-js.active').removeClass('active')
                $('.hd-search-box-js.active').removeClass('active')
                $('.header-left.hide').removeClass('hide')
                $('.menu-item.active').removeClass('active')

                const megaMenuOnMobileJs = document.querySelector('.mega-menu-on-mobile-js')
                if (megaMenuOnMobileJs) {
                    megaMenuOnMobileJs.classList.remove('active')
                }

                $(".submenu").slideUp();

                btnSubs.forEach((btnSub) => {
                    btnSub.classList.remove('active')
                })
            }
        })

        if (menuClose) {
            menuClose.onclick = () => {
                closeMenu()
            }
        }

        bgPage.onclick = () => {
            closeMenu()
        }
    }

    if (menuItems.length > 0) {
        menuItems.forEach((menuItem, index) => {
            let delay = index * 0.25;
            menuItem.style.animationDelay = `${delay}s`
        })
    }

    function closeMenu() {
        menuBars.forEach((menuBar) => {
            menuBar.classList.remove('active')
            let paths = document.querySelectorAll('.path-2')
            paths.forEach((path) => {
                path.setAttribute('d', 'm 50,50 h 20')
            })
        })
        hdMenu.classList.remove('active')
        bgPage.classList.remove('active')

        $('.megaMenuCate.active').removeClass('active')
        $('.mega-menu-child-js').removeClass('active')

        $('.mega-menu-pop-js.active').removeClass('active')
        $('.mega-sub-js.active').removeClass('active')
        $('.mega-menu-sub-js.active').removeClass('active')
        $('.hd-search-box-js.active').removeClass('active')
        $('.header-left.hide').removeClass('hide')
        $('.menu-item.active').removeClass('active')

        const megaMenuOnMobileJs = document.querySelector('.mega-menu-on-mobile-js')
        if (megaMenuOnMobileJs) {
            megaMenuOnMobileJs.classList.remove('active')
        }

        $(".submenu").slideUp();

        btnSubs.forEach((btnSub) => {
            btnSub.classList.remove('active')
        })

        body.classList.remove('no-scroll')
    }

    $(document).ready(function () {
        $(".subBtn").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).next(".submenu").stop().slideToggle();
        });
    });
}