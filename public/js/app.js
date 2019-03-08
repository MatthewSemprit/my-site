$(document).ready(function() {

	$('.jarallax').jarallax({
		speed: 0.2
	});



	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	console.log("load.js");




});

function initMap() {

	var mapStyled = new google.maps.StyledMapType( [
						{
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#1d2c4d"
							}
							]
						},
						{
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#8ec3b9"
							}
							]
						},
						{
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#1a3646"
							}
							]
						},
						{
							"featureType": "administrative.country",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#4b6878"
							}
							]
						},
						{
							"featureType": "administrative.land_parcel",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#64779e"
							}
							]
						},
						{
							"featureType": "administrative.province",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#4b6878"
							}
							]
						},
						{
							"featureType": "landscape.man_made",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#334e87"
							}
							]
						},
						{
							"featureType": "landscape.natural",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#023e58"
							}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#283d6a"
							}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#6f9ba5"
							}
							]
						},
						{
							"featureType": "poi",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#1d2c4d"
							}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#023e58"
							}
							]
						},
						{
							"featureType": "poi.park",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#3C7680"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#304a7d"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#98a5be"
							}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#1d2c4d"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#2c6675"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.stroke",
							"stylers": [
							{
								"color": "#255763"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#b0d5ce"
							}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#023e58"
							}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#98a5be"
							}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text.stroke",
							"stylers": [
							{
								"color": "#1d2c4d"
							}
							]
						},
						{
							"featureType": "transit.line",
							"elementType": "geometry.fill",
							"stylers": [
							{
								"color": "#283d6a"
							}
							]
						},
						{
							"featureType": "transit.station",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#3a4762"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
							{
								"color": "#0e1626"
							}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
							{
								"color": "#4e6d70"
							}
							]
						}
						],
						{name: 'Styled Map'});
						
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 33.7, lng: -84.38},
		zoom: 9.5,
		mapTypeControlOptions: {
			mapTypeIds: ['styled_map']
		}
	});

	//Associate the styled map with the MapTypeId and set it to display.
			map.mapTypes.set('styled_map', mapStyled);
			map.setMapTypeId('styled_map');
}