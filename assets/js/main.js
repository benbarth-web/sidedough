/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function () {

	// Vars.
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Disable animations/transitions until everything's loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		$body.removeClass('is-loading');
	});

});
