export default function CountDownDateModule() {


    const countDowns = document.querySelectorAll('.countdown');
    if (countDowns) {
        countDowns.forEach(function(countDown) {
            const daysEl = countDown.querySelector('.countdown  .days');
            const hoursEl = countDown.querySelector('.countdown  .hours');
            const minsEL = countDown.querySelector('.countdown  .minutes');
            const secondsEL = countDown.querySelector('.countdown  .seconds');
            const currentDateEL = countDown.querySelector('.countdown  .currentDate');

            const timeEnd = countDown.getAttribute("data-timeInDay");

            function countdown() {
                const timeEndDate = new Date(timeEnd);
                const currentDate = new Date();

                const totalSeconds = (timeEndDate - currentDate) / 1000;
                const minutes = Math.floor(totalSeconds / 60) % 60;
                const hours = Math.floor(totalSeconds / 3600) % 24;
                const days = Math.floor(totalSeconds / 3600 / 24);
                const seconds = Math.floor(totalSeconds) % 60;



                var dd = String(currentDate.getDate()).padStart(2, '0');
                var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = currentDate.getFullYear();
                if (currentDateEL) {
                    currentDateEL.innerHTML = `Ngày ${dd} tháng ${mm}, ${yyyy}`;
                }
                if (totalSeconds < 0) {
                    daysEl.innerText = '00'
                    hoursEl.innerText = '00'
                    minsEL.innerText = '00'
                    secondsEL.innerText = '00'
                } else {
                    daysEl.innerText = ('0' + days).slice(-2);
                    hoursEl.innerText = ('0' + hours).slice(-2);
                    minsEL.innerText = ('0' + minutes).slice(-2);
                    secondsEL.innerText = ('0' + seconds).slice(-2);
                    // daysEl.innerText = days
                    // hoursEl.innerText = hours
                    // minsEL.innerText = minutes
                    // secondsEL.innerText = seconds
                }
                // console.log(seconds.length)

            }
            setInterval(countdown, 1000);
        })
    }
}