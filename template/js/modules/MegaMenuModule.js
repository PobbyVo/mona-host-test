export default function MegaMenuModule() {
    const blogfMenu = document.querySelector('.blogfMenu')
    const blogfInner = document.querySelector('.blogfInner')
    const blogfCols = document.querySelectorAll('.blogfCol')

    function calMenu() {
        if (blogfMenu && window.innerWidth > 600) {
            blogfCols.forEach((ele) => {
                if (window.innerWidth < 1201 && ele.clientHeight > (blogfInner.clientHeight / 3)) {
                    calCol(ele)
                } else if (window.innerWidth > 1200 && ele.clientHeight > (blogfInner.clientHeight / 2)) {
                    calCol(ele)
                }
            })
        }
    }

    calMenu()

    function calCol(ele) {
        if (window.innerWidth > 1201) {
            blogfMenu.style.width = blogfMenu.clientWidth + (window.innerWidth / 3) + 'px';
        } else {
            blogfMenu.style.width = '100%'
        }
        ele.closest('.blogfItem').classList.add('col-5')
        ele.classList.add('wrap-5')
    }

    window.addEventListener('resize', calMenu)

    // if (blogfMenu && blogfInner.clientHeight < blogfMenuFlex.clientHeight) {
    //     blogfMenu.style.width = blogfMenu.clientWidth + (window.innerWidth / 3) + 'px';

    //     blogfCols.forEach((ele) => {
    //         if (ele.clientHeight > blogfInner.clientHeight) {
    //             ele.closest('.blogf-menu-col').classList.add('col-5')
    //             ele.classList.add('wrap-5')
    //         }
    //     })
    // }
}