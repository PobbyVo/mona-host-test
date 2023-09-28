export default function VideoModule() {
    var eventVideos = document.querySelectorAll(".eventVideo");
    var zIndexImg = document.querySelector(".img.img2");
    
    if (eventVideos) {
        eventVideos.forEach(function(eventVideo) {
            var isPlaying = false;
            var btnPlay = eventVideo.querySelector('.video-play');
            var video = eventVideo.querySelector('.videoo');
            var imgDefault = eventVideo.querySelector('.videoImgDef');
            video.onplay = () => {
                
                btnPlay.querySelector('.playing > .icon-play').style.display = "none";
                btnPlay.querySelector('.playing > .icon-pause').style.display = "block";
                eventVideo.style.zIndex = '3';
                if (zIndexImg) {
                    zIndexImg.style.zIndex = '2';
                }
                isPlaying = true;
                if (imgDefault) {
                    imgDefault.style.display = "none";
                }
                setTimeout(function (e) {
                    disable();
                },2500)
            }
            video.onpause = () => {
                btnPlay.querySelector('.playing > .icon-play').style.display = "block";
                btnPlay.querySelector('.playing > .icon-pause').style.display = "none";
                isPlaying = false;
                if (imgDefault) {
                    imgDefault.style.display = "none";
                }
                eventVideo.style.zIndex = '0';
                enable();
            }

            btnPlay.addEventListener("click", function () {
                eventVideos.forEach(function (eventVideo) {
                    var videoPause = eventVideo.querySelector('.videoo');
                    videoPause.pause();
                })
                    
                if (isPlaying) {
                    video.pause();
                } else {
                    video.play();
                }
            })

            // video.addEventListener("click", function () {
            //     eventVideos.forEach(function (eventVideo) {
            //         var videoPause = eventVideo.querySelector('.videoo');
            //         videoPause.pause();
            //     })
                    
            //     if (isPlaying) {
            //         video.pause();
            //     } else {
            //         video.play();
            //     }
            // })

            video.addEventListener("touchend", function () {
                enable();
                setTimeout(function () {
                    disable();
                },3500)
            })

            btnPlay.addEventListener("mousemove", function (e) {
                enable();
            });

            video.addEventListener("mousemove", function (e) {
                e.stopPropagation();
                if (isPlaying) {
                    enable();
                    setTimeout(function (e) {
                        disable();
                    },3500)
                } else {
                    enable();
                }
            });

            video.addEventListener("mouseleave", function (e) {
                // e.stopPropagation();
                if (isPlaying) {
                    disable();
                } else {
                    enable();
                }
            });

            function disable() {
                setTimeout(function (e) {
                    btnPlay.style.opacity = 0;
                },200)
            }

            function enable() {
                btnPlay.style.opacity = 1;
            }
        })
    }
}