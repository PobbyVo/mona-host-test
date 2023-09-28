export default function DatetimePickerModule() {
    jQuery(document).ready(function ($) {
        $(function() {
        $('.openTimePicker').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format('YYYY'),10),
                locale: {
                    format: "DD/MM/YYYY",
                }
            });
        });
    })
}