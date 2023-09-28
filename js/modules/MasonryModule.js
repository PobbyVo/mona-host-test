export default function MasonryModule() {
    var grids = document.querySelectorAll('.gridjs');

    let gutter = 0
    // if (window.innerWidth < 1201) {
    //     gutter = 8
    // }

    grids.forEach((grid) => {
        var msnry = new Masonry(grid, {
            itemSelector: '.isotopeItem',
            gutter: gutter,
            columnWidth: 0,
            percentPosition: false
        });
    
        imagesLoaded( grid ).on( 'progress', function() {
            msnry.layout();
        });
    })
}