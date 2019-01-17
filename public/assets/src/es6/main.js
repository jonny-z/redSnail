window.onload = function() {
  $('#Logo_Group').addClass('active');
  $('#Logo_Group').find('use').toggleClass('active');
}

;(function($) {
	$('.rs-hamburger-wrapper').on('click', function() {
		$(this).toggleClass('dropDown');
	})
})(jQuery)