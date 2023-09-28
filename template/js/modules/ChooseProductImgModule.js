export default function ChooseProductImgModule() {
    const chooseImgs = document.querySelectorAll('.chooseImg')

    if (chooseImgs.length > 0) {
        chooseImgs.forEach((chooseImg) => {
            chooseImg.onclick = () => {
                const imgParent = chooseImg.closest('.imgParent')
                
                if (imgParent) {
                    const imgCurents = imgParent.querySelectorAll('.chooseImg')
                    imgCurents.forEach((imgCurent) => {
                        imgCurent.classList.remove('current')
                    })
                    chooseImg.classList.add('current')

                    const changedImg = imgParent.querySelector('.changedImg img')
                    changedImg.src = chooseImg.getAttribute('data-src')
                }
            }
        })
    }
}