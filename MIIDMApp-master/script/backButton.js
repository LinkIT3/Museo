$(document).ready(function() {
  $('body').on('click touch', 'navbar_buttonTopNavSearch', function(e) {
    $('.ricerca_input_e_button').fadeIn();
  });
});

// geri butonunu yakalama
window.onhashchange = function(e) {
  var oldURL = e.oldURL.split('#')[1];
  var newURL = e.newURL.split('#')[1];

  if (oldURL == 'div_sfondo_home') {
    $('.ricerca_input_e_button').fadeOut();
    e.preventDefault();
    return false;
  }
  //console.log('old:'+oldURL+' new:'+newURL);
}