export default function ValidateDateModule() {
    // var today = new Date();
    let today = new Date((new Date()).valueOf() + 1000*3600*24);

    let inputDates = document.querySelectorAll('.validate-date')
    if (inputDates) {
        inputDates.forEach((inputDate) => {
            inputDate.setAttribute('min', today.toISOString().split('T')[0]);
        })
    }

    // validate form đặt bàn
    let validateReservations = document.querySelectorAll('.reservationsFormBox .validate-date')
    if (validateReservations) {
        let todayReservations = new Date();
        validateReservations.forEach((validateReservation) => {
            validateReservation.setAttribute('min', todayReservations.toISOString().split('T')[0]);
        })
    }

    let dateCheckins = document.querySelectorAll('.validate-date.date-checkin')
    let dateCheckouts = document.querySelectorAll('.validate-date.date-checkout')

    if (dateCheckins) {
        dateCheckins.forEach((dateCheckin) => {
            dateCheckin.onchange = (e) => {
                dateCheckouts.forEach((dateCheckout) => {
                    dateCheckout.setAttribute('min', today.toISOString().split('T')[0]);
                })
            }
        })

        dateCheckouts.forEach((dateCheckout) => {
            dateCheckout.onchange = (e) => {
                dateCheckins.forEach((dateCheckin) => {
                    dateCheckin.setAttribute('max', e.target.value);

                    if (e.target.value < dateCheckin.value) {
                        dateCheckin.value = e.target.value
                    }
                })
            }
        })
    }
}