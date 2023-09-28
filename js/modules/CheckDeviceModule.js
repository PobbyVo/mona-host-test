export function CheckDeviceModule() {
    jQuery(document).ready(function($){
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(document.body).addClass('device-mobile');
        } else {
            $(document.body).removeClass('device-mobile');
        }

        var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
            browser;
        if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
            browser = "msie";
        }
        else {
            browser = ua[1].toLowerCase();
        }

        if (browser == 'safari') {
            $('body').addClass('detect-safari')
        } else {
            $('body').addClass('detect-chrome')
        }
    });
}