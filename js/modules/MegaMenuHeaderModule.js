export default function MegaMenuHeaderModule() {
    const cateMultis = document.querySelectorAll('.megaMenuItem');
    const megaMenuCates = document.querySelectorAll('.megaMenuCate');
    const megaMenuJs = document.querySelectorAll('.mega-menu-js');
    const megaMenuOnMobileJs = document.querySelector('.mega-menu-on-mobile-js');
    // const megaMenuBacks = document.querySelectorAll('.mega-menu-back-js');
    // const megaMenuBackLvs = document.querySelectorAll('.mega-menu-back-lv-2-js');

    const menuBars = document.querySelectorAll('.hdBar')
    const hdMenu = document.querySelector('.hdMenu')
    const bgPage = document.querySelector('.bgPage')
    const btnSubs = document.querySelectorAll('.subBtn');
    const body = document.querySelector('body');

    // const megaBg = document.querySelector('.mega-menu-background-js');
    // const megaList = document.querySelector('.mega-menu-list-js');
    
    // MENU SMALL
    // if (cateMultis.length > 0) {
    //     function MenuCate() {
    //         cateMultis.forEach((cateMulti, index) => {
    //             if (window.innerWidth > 1201) {
    //                 cateMulti.onmouseenter = (e) => {
    //                     handleCate(cateMulti, index)
    //                     handleMegaMenuBackground(cateMulti)
    //                 }
    //             } else {
    //                 cateMulti.onclick = (e) => {
    //                     handleCate(cateMulti, index)
    //                     handleMegaMenuBackground(cateMulti)
    //                 }
    //             }
    
    //             cateMulti.onmouseleave = (e) => {
    //                 megaBg.classList.remove('active')
    //             }
    //         });
    //     }
    //     MenuCate()
    // }

    // function handleCate(cateMulti, index) {
    //     cateMultis.forEach((ele) => {
    //         ele.classList.remove('active')
    //     })

    //     megaMenuCates.forEach((ele) => {
    //         ele.classList.remove('active')
    //     })

    //     cateMulti.classList.add('active');
    //     megaMenuCates[index].classList.add('active')

    //     if (window.innerWidth < 1201) {
    //         $('.mega-menu-child-js').addClass('active')
    //         $('.mega-menu-on-mobile-js').removeClass('active')
    //         $('.hdMenu').removeClass('active')
    //     }
    // }

    // function handleMegaMenuBackground(cateMulti, indexMenuItem) {
    //     let prevEle = cateMulti.previousElementSibling

    //     if (prevEle && prevEle.querySelector('.megaMenuCate')) {
    //         prevEle.querySelector('.megaMenuCate').classList.add('mega-menu-cate--before')
    //     }

    //     let nextEle = cateMulti.nextElementSibling

    //     if (nextEle && nextEle.querySelector('.megaMenuCate')) {
    //         nextEle.querySelector('.megaMenuCate').classList.remove('mega-menu-cate--before')
    //     }

    //     let height = cateMulti.clientHeight
    //     let styleGg = cateMulti.getAttribute('style')
    //     let background = styleGg.slice(18)
    //     let boxShadow = styleGg.substring(styleGg.indexOf('inset'))
    //     let top = cateMulti.offsetTop

    //     $('.SiteSubMenu__navHoverArrow-js').attr('style', `--mega-background:${background}; --transform-top:${top}px`)
        
    //     megaBg.setAttribute('style', `--background-top:${top}px; 
    //     --background-height:${height}px; 
    //     --background-color:${background}; 
    //     --box-shadow:${boxShadow}`)

    //     if (cateMulti.classList.contains('active')) {
    //         megaBg.classList.add('active')
    //     }
    // }

    // MENU BIG
    // megaMenuJs.forEach((ele) => {
    //     ele.onmouseenter = () => {
    //         handleMenuItemActive()
    //     }

    //     ele.onmouseleave = () => {
    //         if (window.innerWidth > 1200) {
    //             handleMenuItemInitial()
    //         }
    //     }
    // })

    function checkFilter(menuItem) {
        return menuItem.classList.contains('active')
    }

    function handleMegaMenuOnMobile() {
        if (window.innerWidth < 1201) {
            $('.mega-menu-box').appendTo('.mega-menu-on-mobile-js');

            $('.megaMenuCate.active').removeClass('active')

            $('.megaMenuCate').appendTo('.mega-menu-child-js')

            $('.mega-menu-child-js .hdBar').click(() => {
                menuBars.forEach((menuBar) => {
                    menuBar.classList.remove('active')
                })
                hdMenu.classList.remove('active')
                bgPage.classList.remove('active')
        
                $('.megaMenuCate.active').removeClass('active')
                $('.mega-menu-child-js').removeClass('active')
        
                const megaMenuOnMobileJs = document.querySelector('.mega-menu-on-mobile-js')
                if (megaMenuOnMobileJs) {
                    megaMenuOnMobileJs.classList.remove('active')
                }
        
                $(".submenu").slideUp();
        
                btnSubs.forEach((btnSub) => {
                    btnSub.classList.remove('active')
                })
        
                body.classList.remove('no-scroll')
            })
        } else {
            // $('.mega-menu-box').appendTo('.mega-menu-js');

            // $('.megaMenuCate.active').removeClass('active')

            // $('.megaMenuCate').appendTo('.mega-menu-child-js')
        }
    }

    handleMegaMenuOnMobile()

    window.addEventListener('resize', () => {
        // handleMegaMenuOnMobile()
        // MenuCate()
    })

    if (megaMenuJs.length > 0) {
        megaMenuJs.forEach((ele) => {
            ele.onclick = () => {
                megaMenuOnMobileJs.classList.toggle('active')
                $(".submenu").slideUp();
            }
        })

        // megaMenuBacks.forEach((ele) => {
        //     ele.onclick = () => {
        //         megaMenuOnMobileJs.classList.remove('active')
        //     }
        // })

        // megaMenuBackLvs.forEach((ele) => {
        //     ele.onclick = () => {
        //         if (ele.closest('.megaMenuCate')) {
        //             ele.closest('.megaMenuCate').classList.remove('active')
        //             ele.closest('.mega-menu-child-js').classList.remove('active')
        //             $('.mega-menu-on-mobile-js').addClass('active')
        //             $('.hdMenu').addClass('active')
        //         }
        //     }
        // })
    }

    // HANDLE BACKGROUND ITEM SERVICES
    // const bgDetail = document.querySelector('.mega-menu-detail-bg-js')
    // const itemjs = document.querySelectorAll('.mega-menu-item-js')
    const itemchildjs = document.querySelectorAll('.mega-menu-list-child-js')

    // function handleBackGroundHover(ele) {
    //     const heightEle = ele.clientHeight
    //     const bgColor = '#fff'

    //     const divRect = ele.getBoundingClientRect();
    //     const parentRect = megaList.getBoundingClientRect();
    //     const divOffsetTop = divRect.top - parentRect.top;
    //     const divOffsetLeft = divRect.left - parentRect.left;

    //     bgDetail.setAttribute('style', `--background-color:${bgColor}; --background-height:${heightEle}px; --left:${divOffsetLeft}px; --top:${divOffsetTop}px`)
    // }

    // if (itemjs.length > 0) {
    //     itemjs.forEach((ele) => {
    //         ele.onmouseenter = () => {
    //             handleBackGroundHover(ele)
    //         }
    //     })

    //     itemchildjs.forEach((ele) => {
    //         ele.onmouseleave = () => {
    //             const bgColor = 'transparent'

    //             bgDetail.setAttribute('style', `--background-color:${bgColor}`)

    //             const menuChildActive = document.querySelector('.mega-menu-item-js.active')

    //             if (menuChildActive) {
    //                 itemjs.forEach((el) => {
    //                     el.classList.remove('active-sub')
    //                 })

    //                 menuChildActive.classList.add('active-sub')
    //             }
    //         }
    //     })
    // }

    // SLIDER MENU BANNER
    function sliderInit() {
        const parentSlider = document.querySelectorAll('.menu-banner-slide-js')
        
        const TIMER = 5000
        
        function banSlider(ele) {
            let currentSlide = 1;
            setInterval(() => {
                let childSlider = ele.querySelectorAll('.menu-banner-slide-item-js')
                let lengthSlider = childSlider.length
    
                let nextSlide = currentSlide + 1;
                if (nextSlide > lengthSlider) {
                    nextSlide = 1;
                }
    
                $(ele).css('transform', 'translateX(-' + (currentSlide - 1) * (lengthSlider * 100) / childSlider.length + '%)');
                currentSlide = nextSlide;

                // is video
                // let isVideo = childSlider[currentSlide - 1]
                // console.log(isVideo);

                // if (isVideo.hasAttribute('mega-menu-video')) {
                //     if (isVideo.getAttribute('mega-menu-video') == 'true') {
                //         isVideo.classList.add('active')
                //         isVideo.setAttribute('mega-menu-video', 'false')
                        
                //     } else {
                //         isVideo.classList.remove('active')
                //         isVideo.setAttribute('mega-menu-video', 'true')
                //     }
                // }
            }, TIMER)
        }

        parentSlider.forEach((ele) => {
            banSlider(ele)
        })
    }

    sliderInit()

    // SUB MENU
    const subBtns = document.querySelectorAll('.submenu-icon-js')
    if (subBtns.length > 0) {
        subBtns.forEach((ele) => {
            ele.onclick = (e) => {
                const bgColor = 'transparent'

                bgDetail.setAttribute('style', `--background-color:${bgColor}`)

                let parent = ele.closest('.mega-menu-item-js')
                if (parent) {
                    if (parent.classList.contains('active-sub')) {
                        parent.classList.remove('active-sub')
                    } else {
                        itemjs.forEach((item) => {
                            item.classList.remove('active-sub')
                        })
                        parent.classList.add('active-sub')
                    }
                }
            }
        })

        const menuChildActive = document.querySelector('.mega-menu-item-js.active')

        if (menuChildActive) {
            menuChildActive.classList.add('active-sub')
        }
    }

    // $('.submenu-icon-js').click(function (e) {
    //     // e.stopPropagation();
    //     // e.preventDefault();

    //     let parent = $(this).closest('.mega-menu-item-js')
        
    //     if (parent) {
    //         if (!$(parent).find('.mega-menu-submenu-js').is(':visible')) {
    //             $('.mega-menu-submenu-js').slideUp()
    //             $('.mega-menu-submenu-js').closest('.mega-menu-item-js').removeClass('active-sub')
    //         }
    //         parent.toggleClass('active-sub')
    //         parent.find('.mega-menu-submenu-js').stop().slideToggle(function () {
    //             handleBackGroundHover(parent[0])
    //         });
    //     }
    // })

    // update
    const megaMenuList = document.querySelector('.mega-menu-list-js')
    const megaMenuBox = document.querySelector('.mega-menu-box-js')
    const megaMenuSubs = document.querySelectorAll('.mega-menu-sub-js')
    const label = document.querySelector('.label-js')
    const bgDetail = document.querySelector('.mega-menu-detail-bg-js')
    const megaBg = document.querySelector('.mega-menu-background-js')

    const openMegaMenus = document.querySelectorAll('.menu-item-link-js')
    const openMegaMenuPop = document.querySelector('.mega-menu-pop-js')
    const megaMenuBacks = document.querySelectorAll('.mega-menu-back-js');
    const megaMenuBackLvs = document.querySelectorAll('.mega-menu-back-lv-2-js');

    // popup mega menu
    if(openMegaMenus.length > 0) {
        function megaMenuPop() {
            openMegaMenuPop.classList.toggle('active')

            if (window.innerWidth < 1201) {
                $('.header-left').addClass('hide')
                $(".submenu").slideUp();
            }
        }

        function closeMegaMenuPop() {
            openMegaMenuPop.classList.remove('active')

            if (window.innerWidth < 1201) {
                $('.header-left').removeClass('hide')
                $('.menu-item.active').removeClass('active')
            }
        }

        function closeMegaMenuPopLv2(ele) {
            if (ele.closest('.mega-menu-sub-js')) {
                ele.closest('.mega-menu-sub-js').classList.remove('active')
            }
        }

        // MENU BIG
        // megaMenuJs.forEach((ele) => {
        //     ele.onmouseenter = () => {
        //         handleMenuItemActive()
        //     }

        //     ele.onmouseleave = () => {
        //         if (window.innerWidth > 1200) {
        //             handleMenuItemInitial()
        //         }
        //     }
        // })

        let indexMenuItem
        function handleMenuItemActive() {
            const cateMulti = document.querySelector('.mega-sub-js.active')
            console.log(cateMulti);
            if (cateMulti) {
                console.log(megaSubs);
                indexMenuItem = Array.from(megaSubs).findIndex(checkFilter)
                console.log(cateMulti);
                handleMegaMenuBGBig(cateMulti, indexMenuItem)
            }
        }

        function handleMenuItemInitial() {
            if (indexMenuItem || indexMenuItem === 0) {
                megaSubs.forEach((ele) => {
                    ele.classList.remove('active')
                })
        
                megaMenuSubs.forEach((ele) => {
                    ele.classList.remove('active')
                })
                
                megaSubs[indexMenuItem].classList.add('active')
                megaSubs[indexMenuItem].querySelector('.mega-menu-sub-js').classList.add('active')
            }
        }

        openMegaMenus.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                e.preventDefault()
                ele.classList.toggle('active')
                $('.hd-search-box-js.active').removeClass('active')
                $('.c-modal-js.active').removeClass('active')

                if (window.innerWidth > 1200) {
                    body.classList.toggle('no-scroll')
                }
                // ele.querySelector('.menu-item-link').classList.toggle('active')

                handleMenuItemActive()
                megaMenuPop()

                if (ele.closest('.menu-item').classList.contains('active')) {
                    ele.closest('.menu-item').classList.remove('active')
                } else {
                    ele.closest('.menu-item').classList.add('active')
                }
            }

            ele.onmouseleave = () => {
                if (window.innerWidth > 1200) {
                    handleMenuItemInitial()
                }
            }
        })

        // test 

        openMegaMenuPop.onmouseleave = () => {
            if (window.innerWidth > 1200) {
                handleMenuItemInitial()
                megaBg.setAttribute('style', `--background-color:#fff`)
            }
        }

        // openMegaMenuPop.onmouseleave = () => {
        //     if (window.innerWidth > 1200) {
        //         handleMenuItemInitial()

        //         $('.menu-item.active').removeClass('active')
        //         $('.menu-item-link-js.active').removeClass('active')
        //         megaMenuPop()
        //     }
        // }

        openMegaMenuPop.onclick = (e) => {
            e.stopPropagation()
        }

        body.onclick = () => {
            if (window.innerWidth > 1200) {
                handleMenuItemInitial()

                $('.menu-item.active').removeClass('active')
                $('.menu-item-link-js.active').removeClass('active')
                $('.mega-menu-pop-js.active').removeClass('active')
                body.classList.remove('no-scroll')
            }
        }

        megaMenuBacks.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                closeMegaMenuPop()
            }
        })

        megaMenuBackLvs.forEach((ele) => {
            ele.onclick = () => {
                console.log(indexMenuItem);
                closeMegaMenuPopLv2(ele)
            }
        })

        megaMenuSubs.forEach((megaMenuSub) => {
            megaMenuSub.setAttribute('style', `--widthSub:${megaMenuList.clientWidth}px;`)
        })
    
        if (label) {
            label.setAttribute('style', `--widthSub:${megaMenuList.clientWidth}px;`)
        }
    
        function handleCate(ele, index) {
            megaSubs.forEach((ele) => {
                ele.classList.remove('active')
            })
    
            ele.classList.add('active')
    
            megaMenuSubs.forEach((ele) => {
                ele.classList.remove('active')
            })
    
            // cateMulti.classList.add('active');
            megaMenuSubs[index].classList.add('active')
    
            let prevEle = ele.previousElementSibling
    
            if (prevEle && prevEle.querySelector('.mega-menu-sub-js')) {
                prevEle.querySelector('.mega-menu-sub-js').classList.add('mega-menu-cate--before')
            }
    
            let nextEle = ele.nextElementSibling
    
            if (nextEle && nextEle.querySelector('.mega-menu-sub-js')) {
                nextEle.querySelector('.mega-menu-sub-js').classList.remove('mega-menu-cate--before')
            }
    
            // if (window.innerWidth < 1201) {
            //     $('.mega-menu-child-js').addClass('active')
            //     $('.mega-menu-on-mobile-js').removeClass('active')
            //     $('.hdMenu').removeClass('active')
            // }
        }
    
        // handle effect background mega menu item
        function handleMegaMenuBGBig(ele, indexMenuItem) {
            let wrap = ele.querySelector('.wrap')
            let height = wrap.clientHeight
            let width = wrap.clientWidth
            let styleGg = ele.getAttribute('style')
            
            let background
            if (styleGg) {
                background = styleGg.slice(18)
            } else {
                background = '#F8F3FF'
            }
            // let boxShadow = styleGg.substring(styleGg.indexOf('inset'))
    
            const divRect = wrap.getBoundingClientRect();
            const parentRect = megaMenuBox.getBoundingClientRect();
            const divOffsetTop = divRect.top - parentRect.top;
            const padding = window.getComputedStyle(megaMenuBox).getPropertyValue('padding').substring(0, 2)
            const divOffsetLeft =  divRect.left - parentRect.left - padding;
    
            // let top = ele.offsetTop
            // let left = ele.offsetTop
    
            // $('.SiteSubMenu__navHoverArrow-js').attr('style', `--mega-background:${background}; --transform-top:${top}px`)
            
            // megaBg.setAttribute('style', `--background-top:${top}px; 
            // --background-height:${height}px; 
            // --background-color:${background}; 
            // --box-shadow:${boxShadow}`)
    
            megaBg.setAttribute('style', `--background-top:${divOffsetTop}px;
            --background-left:${divOffsetLeft}px;
            --background-color:${background}; 
            --background-width:${width}px; 
            --background-height:${height}px`)
    
            if (ele.classList.contains('active')) {
                megaBg.classList.add('active')
            }
        }

        const menuItems = document.querySelectorAll('.mega-menu-item-js')
        if (menuItems.length > 0) {
            menuItems.forEach((ele, index) => {
                ele.onmouseenter = (e) => {
                    e.stopPropagation()
                    handleMegaMenuBGBig(ele)
                }
            })
        }
    
        const megaSubs = document.querySelectorAll('.mega-sub-js')
        if (megaSubs.length > 0) {
            megaSubs.forEach((ele, index) => {
                ele.onmouseenter = (e) => {
                    e.stopPropagation()
                    handleCate(ele, index)
                    handleMegaMenuBGBig(ele)
                }
            })
        }
    }

    // Kiểm tra ngày giờ
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 18) {
        // console.log("Trời sáng.");
        $('.header-hotline').removeClass('night')
    } else {
        // console.log("Trời tối.");
        $('.header-hotline').addClass('night')
    }

}