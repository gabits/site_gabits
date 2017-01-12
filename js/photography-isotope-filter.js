// init Isotope
$(document).ready(function(){
    var $grid = $('.grid').isotope({
  // options
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // set to the element
            columnWidth: '.grid-item'
        }
    });

    $('.filters-button-group').on( 'click', 'button', function() {
        var x = $(this).attr('data-filter');
        $grid.isotope({ filter: x });
    });
});