export default function Range() {
    const rangeSearch = document.querySelector("#characters-range")
    if(rangeSearch) {
        rangeSearch.oninput = function() {
            var value = (this.value-this.min)/(this.max-this.min)*100
            this.style.background = 'linear-gradient(to right, #1EC0F2 0%, #1EC0F2 ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
        };
    }
}