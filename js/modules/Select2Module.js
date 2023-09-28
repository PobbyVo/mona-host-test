export default function Select2Module() {
    jQuery(document).ready(function ($) {
        $(".select2choose").each(function (i, v) {
            var placeholder = $(this).attr("data-placeholder");
            $(this).select2({
                width: '100%',
                placeholder: placeholder,
                dropdownCssClass: 'no-search'
            });
        });
    })
}