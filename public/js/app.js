
$(document).ready(function() {

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', './public/js/particlesjs-config.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	console.log("load.js");

	// var map;
	// function initMap() {
	// 	map = new google.maps.Map(document.getElementById('map'), {
	// 	  center: {lat: -34.397, lng: 150.644},
	// 	  zoom: 8
	// 	});
	// }

});