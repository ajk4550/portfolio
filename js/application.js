$(document).ready(function() {
	// Changing the opacity of the social icons in the footer
	$(".social-icon").mouseenter(function() {
		$(this).css("opacity", 1);
	}).mouseleave(function() {
		$(this).css("opacity", 0.5);
	});

// 	$('.menu li a').click(function(e) {
//   var $this = $(this);
//   if (!$this.hasClass('active')) {
//     $this.addClass('active');
//   }
//   e.preventDefault();
// });
 });

$(document).scroll(function() {
	// Grabbing the displacement from the top when scrolled and storing as a variable 'y'
	var y = $(this).scrollTop();
	if (y > 450) {
		$("#navigation").removeClass("navbar-static-top").css("margin-top", "-50px").animate({"top" : "50px"},"slow").addClass("navbar-fixed-top");
		$("#carousel-example-generic").css("margin-top", "50px");
		$("#section1").css("margin-top", "110px");
	}
	else{		
		$("#navigation").removeClass("navbar-fixed-top").addClass("navbar-static-top");
		$("#section1").css("margin-top", "40px");
	}

	// if (y == 480) {
	// 	$("li.active").next().addClass("active").prev().removeClass("active");
	// }
	// if (y == 880) {
	// 	$("li.active").next().addClass("active").prev().removeClass("active");
	// }
});
// var menu = document.querySelector('.menu');
// var anchors = menu.getElementsByTagName('a');

// for (var i = 0; i < anchors.length; i += 1) {
//   anchors[i].addEventListener('click', function() { clickHandler(anchors[i]) }, false);
// }

// function clickHandler(anchor) {
//   var hasClass = anchor.getAttribute('class');
//   if (hasClass !== 'active') {
//     anchor.setAttribute('class', 'active');
//   }
// }