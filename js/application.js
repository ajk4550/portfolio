$(document).ready(function() {
	// *** Fix for the navbar links with fixed header
	// Amount to offset the scroll by
	var offset = 94;

	// On this event, prevent default scroll and instead
	// Scroll to the postion taking into account the offset
	$('.navbar li a').click(function(event){
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});
 });