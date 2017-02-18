(function ($) {
  $(function () {

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
    $('.carousel.carousel-slider').carousel({full_width: true});

    $('.rating').barrating({
      theme: 'fontawesome-stars',
      initialRating: 7.5
    });

    $('.collapsible').collapsible();

    var rangeYear = document.getElementById('range-years');
    noUiSlider.create(rangeYear, {
      start: [2010, 2017],
      connect: true,
      // orientation: 'vertical', // Orient the slider vertically
      behaviour: 'tap-drag', // Move handle on tap, bar is draggable
      step: 1,
      tooltips: true,
      format: wNumb({
        decimals: 0
      }),
      range: {
        'min': 2000,
        'max': 2017
      },
      pips: { // Show a scale with the slider
        // mode: 'range',
        mode: 'values',
        values: [2000, 2005, 2010, 2014, 2017],
        stepped: true,
        density: 6.5
      }
    });

    var rangeRating = document.getElementById('range-rating');
    noUiSlider.create(rangeRating, {
      start: [7, 10],
      connect: true,
      // orientation: 'vertical', // Orient the slider vertically
      behaviour: 'tap-drag', // Move handle on tap, bar is draggable
      step: 1,
      tooltips: true,
      format: wNumb({
        decimals: 0
      }),
      range: {
        'min': 1,
        'max': 10
      },
      pips: { // Show a scale with the slider
        mode: 'values',
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        stepped: true,
        density: 10
      }
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space