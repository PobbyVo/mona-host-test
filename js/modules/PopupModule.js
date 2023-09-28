export default function PopupModule() {
    const openPops = document.querySelectorAll('.openPop')
    const closePops = document.querySelectorAll('.closePop')
    const popupBg = document.querySelector('.popupBg')
    const popupBox = document.querySelector('.popupBox')
    const body = document.querySelector('body')

    if (openPops.length > 0) {
        openPops.forEach((openPop) => {
            openPop.onclick = (e) => {
                e.preventDefault()
                e.stopPropagation()
                popupBox.classList.add('active')
                popupBg.classList.add('active')
                body.classList.add('no-scroll')
            }
        })
    }

    if (closePops.length > 0) {
        closePops.forEach((closePop) => {
            closePop.onclick = () => {
                closePopForm()
            }
        })

        popupBg.onclick = () => {
            closePopForm()
        }
    }

    function closePopForm() {
        const isMenu = document.querySelector('.hdBar.active')
        
        if (!isMenu) {
            popupBg.classList.remove('active')
            body.classList.remove('no-scroll')
        }
        popupBox.classList.remove('active')
        popService.classList.remove('active')
    }

    const openPopServices = document.querySelectorAll('.openPopServices')
    const popService = document.querySelector('.popService')

    if (openPopServices.length > 0) {
        openPopServices.forEach((ele) => {
            ele.onclick = (e) => {
                e.preventDefault()
                e.stopPropagation()
                popService.classList.add('active')
                popupBg.classList.add('active')
                body.classList.add('no-scroll')
            }
        })
    }

    // get code
    const openPopJs = document.querySelectorAll('.open-pop-js')
    const modalPopJs = document.querySelector('.modal-pop-js')
    const closeModalPopJs = document.querySelectorAll('.modal-pop-close-js')
    if (openPopJs.length > 0) {
        openPopJs.forEach((ele) => {
            ele.onclick = (e) => {
                if (modalPopJs) {
                    modalPopJs.classList.toggle('active')
                }
            }
        })

        closeModalPopJs.forEach((ele) => {
            ele.onclick = () => {
                modalPopJs.classList.remove('active')
            }
        })
    }

    // contextmenu
    const popperContextMenu = document.querySelector('#popperContextMenu')
    if (popperContextMenu && window.innerWidth > 1200) {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            if (popperContextMenu) {
                var mouseX = e.clientX;
                var mouseY = e.clientY;
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var contextMenuWidth = popperContextMenu.offsetWidth;
                var contextMenuHeight = popperContextMenu.offsetHeight;
    
                // Kiểm tra vị trí của chuột so với khung màn hình
                if (mouseX + contextMenuWidth > windowWidth) {
                    mouseX = windowWidth - contextMenuWidth - 30;
                }
                if (mouseY + contextMenuHeight > windowHeight) {
                    mouseY = windowHeight - contextMenuHeight - 30;
                }
    
                popperContextMenu.style.left = mouseX + 'px';
                popperContextMenu.style.top = mouseY + 'px';
                popperContextMenu.style.opacity = '1';
                popperContextMenu.style.pointerEvents = 'auto';
            }
        })
    
        document.addEventListener('click', (e) => {
            popperContextMenu.style.opacity = '0';
            popperContextMenu.style.pointerEvents = 'none';
        })

        popperContextMenu.onclick = ((e) => {
            e.stopPropagation()
        })
    }

    // account form
    const openPopAccounts = document.querySelectorAll('.open-account')
    const openPopLogins = document.querySelectorAll('.open-login')
    const openPopRegisters = document.querySelectorAll('.open-register')
    const openForgotpasss = document.querySelectorAll('.open-forgotpass')

    const formLogin = document.querySelector('.form-login')
    const formRegister = document.querySelector('.form-register')
    const formForgotpass = document.querySelector('.form-forgotpass')
    const formtab = document.querySelector('.popup-account-form-tab')

    if (openPopLogins.length > 0) {
        function hideFormRegister() {
            openPopRegisters.forEach((ele) => {
                ele.classList.remove('active')
            })

            formRegister.classList.remove('active')
        }

        function hideFormLogin() {
            openPopLogins.forEach((ele) => {
                ele.classList.remove('active')
            })

            formLogin.classList.remove('active')
        }

        function hideFormForgotpass() {
            openForgotpasss.forEach((ele) => {
                ele.classList.remove('active')
            })

            formForgotpass.classList.remove('active')
            formtab.style.display = 'flex'
        }

        function showFormRegister() {
            openPopRegisters.forEach((ele) => {
                ele.classList.add('active')
            })

            formRegister.classList.add('active')
        }

        function showFormLogin() {
            openPopLogins.forEach((ele) => {
                ele.classList.add('active')
            })

            formLogin.classList.add('active')
        }
        
        function showFormForgotpass() {
            openForgotpasss.forEach((ele) => {
                ele.classList.add('active')
            })

            formForgotpass.classList.add('active')
            formtab.style.display = 'none'
        }

        openPopLogins.forEach((ele) => {
            ele.onclick = () => {
                showFormLogin()
                hideFormRegister()
                hideFormForgotpass()
            }
        })

        openPopRegisters.forEach((ele) => {
            ele.onclick = () => {
                showFormRegister()
                hideFormLogin()
                hideFormForgotpass()
            }
        })

        openForgotpasss.forEach((ele) => {
            ele.onclick = () => {
                showFormForgotpass()
                hideFormLogin()
                hideFormRegister()
            }
        })
    }

    const openModalJss = document.querySelectorAll('.open-modal-js')
    const closeModalJss = document.querySelectorAll('.close-modal-js')
    const modal = document.querySelector('.c-modal-js')
    if (openModalJss.length > 0) {
        openModalJss.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                e.preventDefault()

                $('.hd-search-box-js.active').removeClass('active')
                $('.mega-menu-pop-js.active').removeClass('active')
                $('.bgPage.active').removeClass('active')
                $('.header-mid-js.active').removeClass('active')
                $('.hdBar.active').removeClass('active')
                $('.menu-item-link-js.active').removeClass('active')
                $('.menu-item.active').removeClass('active')

                if (modal) {
                    openCart()
                }
            }
        })
    }

    function openCart() {
        modal.classList.add('active')

        if (window.innerWidth < 1201) {
            popupBg.classList.add('active')
            body.classList.add('no-scroll')
        }
    }

    function closeCart() {
        modal.classList.remove('active')
        popupBg.classList.remove('active')
        body.classList.remove('no-scroll')
    }

    if (closeModalJss.length > 0) {
        closeModalJss.forEach((ele) => {
            ele.onclick = (e) => {
                e.stopPropagation()
                if (modal) {
                    closeCart()
                }
            }
        })

        popupBg.onclick = () => {
            closeCart()
        }
    }
}