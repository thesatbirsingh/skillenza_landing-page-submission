$(document).ready(function() {

	var controller = new ScrollMagic.Controller();

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#about",
		triggerHook: 1
	})
	.setClassToggle("#about", 'fade-in')
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#challenges",
		triggerHook: 1
	})
	.setClassToggle("#challenges", 'fade-in')
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#process",
		triggerHook: 1
	})
	.setClassToggle("#process", 'fade-in')
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#faq",
		triggerHook: 1
	})
	.setClassToggle("#faq", 'fade-in')
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#contact",
		triggerHook: 1
	})
	.setClassToggle("#contact", 'fade-in')
	.addTo(controller);
	var ourScene = new ScrollMagic.Scene({
		triggerElement: "#theTeam",
		triggerHook: 1
	})
	.setClassToggle("#theTeam", 'fade-in')
	.addTo(controller);
});