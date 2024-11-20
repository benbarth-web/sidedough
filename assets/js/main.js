/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

var isLoaded = false;

$(window).on('load', function () {
	isLoaded = true;
	// Enable now that everything's loaded.
	$('body').removeClass('is-loading');
});

$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Disable animations/transitions until everything's loaded.
	if (isLoaded === false) $body.addClass('is-loading');

});
