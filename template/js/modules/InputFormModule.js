export default function InputFormModule() {
    const ipts = document.querySelectorAll('.form-cus input')
    const selects = document.querySelectorAll('.form-cus select')

    function check_ipt(ele) {
        if (ele.value != '') {
            ele.closest('.f-c').classList.add('active')
        }  
    }

    function focus(ele) {
        ele.closest('.f-c').classList.add('active')
    }

    function onchange(ele) {
        if (ele.files) {
            ele.closest('.f-c').classList.add('active')
            let fileName = ele.files[0].name.match(/([^\\\/]+)$/)[0];
            let label = ele.closest('.f-c').querySelector('label')
            label.innerHTML = fileName
        }
    }

    function blur(ele) {
        if (ele.value == '') {
            ele.closest('.f-c').classList.remove('active')
        } else {
            ele.closest('.f-c').classList.add('active')
        }
    }

    if (ipts.length > 0) {
        ipts.forEach((ele) => {
            if (ele.closest('.f-c')) {
                check_ipt(ele)
            }

            ele.onclick = () => {
                if (ele.closest('.f-c')) {
                    focus(ele)
                }
            }

            ele.focus = () => {
                if (ele.closest('.f-c')) {
                    focus(ele)
                }
            }

            ele.onchange = () => {
                onchange(ele)
            }

            ele.onblur = () => {
                if (ele.closest('.f-c')) {
                    blur(ele)
                }
            }
        })
    }

    if (selects.length > 0) {
        selects.forEach((ele) => {
            if (ele.closest('.f-c')) {
                check_ipt(ele)
            }

            ele.focus = () => {
                if (ele.closest('.f-c')) {
                    focus(ele)
                }
            }

            ele.onblur = () => {
                if (ele.closest('.f-c')) {
                    blur(ele)
                }
            }
        })
    }

    // Custom input wpcf7
    const wpcf7Items = document.querySelectorAll('.wpcf7-form-control-wrap .wpcf7-list-item input')

    if (wpcf7Items.length > 0) {
        wpcf7Items.forEach((ele) => {
            $("<span class='ipt-radio-cus'></span>").insertAfter(ele)
        })
    }

    // SEARCH FORM

    const openSearchForm = document.querySelectorAll('.hd-search-js')
    const boxSearchForm = document.querySelector('.hd-search-box-js')

    const searchValue = document.querySelector('.searchValue')
    const searchRemove = document.querySelector('.searchRemove')
    const hdSearch = document.querySelector('.hd-search-form-js')

    if (openSearchForm.length > 0) {
        openSearchForm.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                boxSearchForm.classList.toggle('active')
                $('.c-modal-js.active').removeClass('active')
                closeMenu()
            }
        })

        boxSearchForm.onclick = (e) => {
            e.stopPropagation()
        }
    }

    const menuBars = document.querySelectorAll('.hdBar')
    const hdMenu = document.querySelector('.hdMenu')
    const bgPage = document.querySelector('.bgPage')
    const btnSubs = document.querySelectorAll('.btnSubs')

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
        // $('.mega-sub-js.active').removeClass('active')
        // $('.mega-menu-sub-js.active').removeClass('active')
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

    if (searchValue) {
        searchValue.onkeyup = () => {
            checkValue()
        }

        searchValue.onclick = () => {
            checkValue()
        }

        function checkValue() {
            if (searchValue.value != '') {
                hdSearch.classList.add('hasValue')
            } else {
                hdSearch.classList.remove('hasValue')
            }
        }

        // searchValue.onclick = (e) => {
        //     e.stopPropagation()

        //     if (searchHistory) {
        //         searchHistory.classList.add('active')
        //     }
        // }

        searchRemove.onclick = () => {
            searchValue.value = '';
            searchValue.focus();
            hdSearch.classList.remove('hasValue')
        }
    }

    const body = document.querySelector('body')
    if (boxSearchForm) {
        body.onclick = () => {
            boxSearchForm.classList.remove('active')
        }
    }
}