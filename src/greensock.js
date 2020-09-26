$(document).ready(function () {
	if (Modernizr) {
		console.log("Modernizr is active");
	}

	var tl = gsap.timeline();

	var tween = gsap.to($(".gs-me"), { duration: 5, opacity: 0.5, yoyo: true });
	tl.add(tween);

});


