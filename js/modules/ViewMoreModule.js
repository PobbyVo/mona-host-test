export default function ViewMoreModule() {
    $(function () {
        const moreLists = document.querySelectorAll(".more-list");
        const moreItems = document.querySelectorAll(".more-item");

        if (moreLists.length > 0) {
            for (let i = 0; i < moreLists.length; i++) {
                $(moreLists[i].querySelectorAll('.more-item')).hide();
                $(moreLists[i].querySelectorAll('.more-item')).slice(0, 5).show();
                $('.more-btn').on('click', function (e) {
                    e.preventDefault();
                    $(moreLists[i].querySelectorAll('.more-item')).slice(0, moreItems.length).slideDown();
                    if ($(moreLists[i].querySelectorAll('.more-item')).length == 0) {
                        $("#load").fadeOut('slow');
                    }
                    $('html,body').animate({
                        scrollTop: $(this).offset().top - 200
                    }, 1200);

                    $(this).css('display', 'none')
                });
            }
        }

        const readMoreBtns = document.querySelectorAll('.read-more-btn')

        if (readMoreBtns.length > 0) {
            readMoreBtns.forEach((readMoreBtn) => {
                readMoreBtn.onclick = () => {
                    const text = readMoreBtn.querySelector('.c-text')
                    const content = readMoreBtn.closest('.moreContent')
                    if (text.innerHTML.trim() == 'Đọc tiếp') {
                        text.innerHTML = 'Thu gọn'
                        if (content) {
                            content.classList.add('show')
                        }
                    } else {
                        text.innerHTML = 'Đọc tiếp'
                        if (content) {
                            content.classList.remove('show')
                        }
                    }
                }
            })
        }
    });
}