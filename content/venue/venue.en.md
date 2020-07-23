---
title: "Conference Venue"
date: 2020-04-26T17:47:45+02:00
draft: false

menu:
  main:
    parent: "Venue"
    weight: 6
---

## Centro de Convenciones Buenos Aires y Facultad de Derecho UBA
The Buenos Aires Convention Center [(CEC)](https://turismo.buenosaires.gob.ar/es/article/centro-de-convenciones-buenos-aires-cec) and the UBA Law School are located in the Recoleta neighborhood, one of the most interesting areas of the city. The Recoleta is a traditional neighborhood, born as a place of weekend houses for wealthy families where they built their farms and rest houses. Originally this neighborhood was located on the outskirts of the city, but the advance of civilization has left it in a central place of it, with a variety of activities and very connected through the subway and buses that arrive from different parts of the city.
The convention center has a capacity of 5000 attendees and a modern design that highlights natural light and energy savings. It has an area of 1600 m2 distributed over three floors.
The Law Faculty of the University of Buenos Aires is right next to the CEC. The Faculty building is one of the most emblematic of the City of Buenos Aires. Founded on September 21, 1949 by President Juan Domingo Perón and his wife Eva Duarte de Perón (Evita). It is undoubtedly one of the most relevant neoclassical architectural works in Buenos Aires. It has an area of 40,000 m2 distributed over four floors. Undoubtedly, its facade composed of 14 Doric columns give it a unique character. https://turismo.buenosaires.gob.ar/es/otros-establecimientos/facultad-de-derecho
Without a doubt these places are unforgettable and will make the FOSS4G 2021 one of the most remembered.




{{< rawhtml >}}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
		<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
		<style>
		  #mymap { 
		  	position: relative;
		    width: 100%;
    		height: 350px;
    		outline: none;
		    box-shadow: 5px 5px 5px #888;
		 }
		</style>
	</head>
	<body>
		<div id="mymap"></div>
		<script>
		  var mymap = L.map('mymap').setView([-34.58313,-58.39141], 17);
		  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors. <a',
			maxZoom: 18
			}).addTo(mymap);
		  L.control.scale().addTo(mymap);
		  var marcador_uno = L.marker([-34.58260,-58.38999], {
			title: "Centro de Convenciones Buenos Aires",
			draggable:false,
			}).bindPopup("<i>Centro de Convenciones Buenos Aires</i>")
			.addTo(mymap);
			var marcador_dos = L.marker([-34.58277,-58.39136], {
			title:"Facultad de Derecho",
			draggable:false,
			}).bindPopup("<i>Facultad de Derecho</i>")
			.addTo(mymap);
		</script>
	</body>
</html>

{{< /rawhtml >}}
