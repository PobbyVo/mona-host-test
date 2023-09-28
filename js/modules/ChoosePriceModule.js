export default function ChoosePriceModule() {

    // choose price
    const choosePrices = document.querySelectorAll('.choosePrice')

    if (choosePrices.length > 0) {
        choosePrices.forEach((choosePrice) => {
            choosePrice.onclick = (e) => {
                e.stopPropagation()
                choosePrices.forEach((choosePrice) => {
                    choosePrice.classList.remove('current')
                })

                choosePrice.classList.add('current')
            }
        })
    }

    // choose color
    const chooseColors = document.querySelectorAll('.chooseColor')
    const iptChecks = document.querySelectorAll('.ipt-checked')

    if (chooseColors.length > 0) {
        chooseColors.forEach((chooseColor, i) => {
            chooseColor.onclick = (e) => {
                e.stopPropagation()
                chooseColors.forEach((chooseColor) => {
                    chooseColor.classList.remove('current')
                })

                iptChecks[i].checked = true
                chooseColor.classList.add('current')
            }
        })
    }

    if (window.innerWidth < 769) {
        const asideBtns = document.querySelectorAll('.asideBtn')
        const asideToggles = document.querySelectorAll('.asideToggle')

        if (asideBtns.length > 0) {
            asideBtns.forEach((asideBtn, i) => {
                asideBtn.onclick = (e) => {
                    e.stopPropagation()

                    console.log(asideToggles[i].classList.contains('active'));

                    if (asideToggles[i].classList.contains('active')) {
                        asideToggles[i].classList.remove('active')
                    } else {
                        asideToggles.forEach((asideToggle) => {
                            asideToggle.classList.remove('active')
                        })
                        
                        asideToggles[i].classList.add('active')
                    }
                }
            })
        }
    }
}