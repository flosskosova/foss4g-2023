---
title: "Conference Venue"
date: 2020-04-26T17:47:45+02:00
draft: false

menu:
  main:
    parent: "Venue"
---

## Centro de Convenciones Buenos Aires y Facultad de Derecho UBA
El Centro de Convenciones Buenos Aires (CEC) y la Facultad de Derecho UBA se encuentran en el barrio Recoleta, una de las zonas más interesantes de la ciudad. La Recoleta es un barrio tradicional, nacido como lugar de casas de fin de semana para las familias adineradas donde estas edificaban sus fincas y casonas de descanso. Originalmente este barrio estaba situado en las afueras de la ciudad, pero el avance de la civilización lo ha dejado en un lugar central de la misma, con mucha variedad de actividades y muy conectado a través del metro y buses que llegan desde diferentes lugares de la ciudad.
El centro de convenciones tiene capacidad para 5000 asistentes y un diseño moderno en donde se resalta la luz natural y el ahorro de energía. Posee una superficie de 1600 m2 distribuidos en tres plantas. https://turismo.buenosaires.gob.ar/es/article/centro-de-convenciones-buenos-aires-cec 
La Facultad de Derecho se encuentra próxima al CEC. El edificio de la Facultad es uno de los más emblemáticos de la Ciudad de Buenos Aires. Fundado el 21 de septiembre de 1949 por el Presidente Juan Domingo Perón y su esposa Eva Duarte de Perón (Evita). Es sin dudas una de las obras arquitectónicas de estilo neoclásico más relevantes de Buenos Aires. Tiene una superficie de 40.000 m2 distribuidos en cuatro plantas. Sin dudas su fachada compuesta por 14 columnas Dóricas le confieren un carácter único. https://turismo.buenosaires.gob.ar/es/otros-establecimientos/facultad-de-derecho
 Sin dudas estos lugares son inolvidables y harán de la FOSS4G 2021 una de las más recordadas.




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
