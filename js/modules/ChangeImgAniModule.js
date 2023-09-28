export default function ChangeImgAniModule() {
    const changeImgAnis = document.querySelectorAll('.changeImgAni')
    if (changeImgAnis.length > 0) {
        function removeActive() {
            changeImgAnis.forEach((ele) => {
                ele.classList.remove('active')
            })
        }
        changeImgAnis.forEach((ele, i) => {
            setTimeout(() => {
                removeActive()
                ele.classList.add('active')
            }, i*300)
        })
    }

    const video = document.querySelector('.bannerVideo')

    if (video) {
        video.play()
        video.onended = () => {
            video.remove()
            const chars = document.querySelectorAll('.char')
            chars.forEach((char, i) => {
                setTimeout(() => {
                    char.classList.add('remove')
                }, i*300)
            })
        }
    }

    const title_f = document.querySelector('.title_f')
    const title_s = document.querySelector('.title_s')
    const introPreloader = document.querySelector('.intro_preloader')
    const ranImgs = document.querySelectorAll('.img-random')
    const ranImgArrs = document.querySelectorAll('.random-list .ranImg')
    const lengthImg = ranImgArrs.length

    const imgArr = []
    ranImgArrs.forEach((ranImgArr) => {
        imgArr.push(ranImgArr.src)
    })

    if (ranImgs.length > 0) {
        ranImgs.forEach((ranImg) => {
            const interVal = setInterval(() => {
                ranImg.src = imgArr[Math.floor(Math.random() * lengthImg)]
            }, 200)

            setTimeout(() => {
                introPreloader.classList.add('active')

                setTimeout(() => {
                    clearInterval(interVal)
                    introPreloader.classList.add('hide')
                    title_f.classList.add('active')

                    if (title_s) {
                        title_s.classList.add('active')
                    }

                    setTimeout(() => {

                        for(let i = 1; i < 6; i++) {
                            setTimeout(() => {
                                title_f.classList.add('is_'+i)
                            }, i*200)
                        }

                    }, 3000)
                }, 3000)
            }, 300)
        })
    }
}