export default function SearchModule() {
    const hdSearchBtn = document.querySelector('.hdSearchBtn')
    const hdSearch = document.querySelector('.hdSearch')

    if (hdSearchBtn) {
        hdSearchBtn.onclick = (e) => {
            e.stopPropagation()
            hdSearch.classList.toggle('active')
        }
    }
}