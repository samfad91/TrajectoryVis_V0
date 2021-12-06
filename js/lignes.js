<script>
            // On initialise la latitude et la longitude
            var lat = 36.705615;//ESI Alger
            var lon = 3.173830;
            var map = null;

            // Fonction d'initialisation de la carte
            function initMap() {
                // Créer l'objet "carte" et l'insèrer dans l'élément HTML qui a l'ID "macarte"
                map = L.map('map').setView([lat, lon], 2);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map);

/*var myIcon = L.icon({
    iconUrl: 'F:/3CS/Doc_PFE2/MonSite/img/icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'F:/3CS/Doc_PFE2/MonSite/img/icon.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});*/
                //ajouter des marqueurs

                for (var i = trajet1.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet1[i,i], {icon: greenIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #covid19 1-15 Mai 2020 position </h5>" + i);
                  
                }

                for (var i = trajet2.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet2[i,i], {icon: yellowIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #corona 1-15 Mai 2020  position </h5>" + i);
                  
                }

                for (var i = trajet3.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet3[i,i], {icon: greenIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #covid19 16-31 Mai 2020  position </h5>" + i);
                  
                }

                 for (var i = trajet4.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet4[i,i], {icon: yellowIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #corona 16-31 Mai 2020  position </h5>" + i);
                  
                }
                for (var i = trajet5.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet5[i,i], {icon: blackIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #covid19 1-15 Juin 2020  position </h5>" + i);
                  
                }
               for (var i = trajet6.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet6[i,i], {icon: redIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #corona 1-15 Juin 2020  position </h5>" + i);
                  
                }
               for (var i = trajet7.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet7[i,i], {icon: blackIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #covid19 16-30 Juin 2020  position </h5>" + i);
                  
                }
               for (var i = trajet8.length - 1; i >= 0; i--) {
                  var marqueur1 = L.marker(trajet8[i,i], {icon: redIcon}).addTo(map);
              marqueur1.bindPopup("<h5>Trajectoire de #corona 16-30 Juin 2020  position </h5>" + i);
                  
                }
               
               
//Covid19
trajet1 =trajet1.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet1,
                                              {
                                                color: '#23B218'
                                              }

               ).addTo(map)
trajet3 =trajet3.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet3,
                                              {
                                                color: '#23B218'
                                              }

               ).addTo(map)
              


trajet5 =trajet5.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet5,
                                              {
                                                color: '#57554C'
                                              }

               ).addTo(map)

trajet7 =trajet7.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet7,
                                              {
                                                color: '#57554C'
                                              }

               ).addTo(map)

//corona

trajet2 =trajet2.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet2,
                                              {
                                                color: '#DD5151'
                                              }

               ).addTo(map)
trajet4 =trajet4.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet4,
                                              {
                                                color: '#DD5151'
                                              }

               ).addTo(map)
trajet6 =trajet6.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet6,
                                              {
                                                color: '#FBD708'
                                              }

               ).addTo(map)
trajet8 =trajet8.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet8,
                                              {
                                                color: '#FBD708'
                                              }

               ).addTo(map)



               var popup = L.popup();

               function onMapClick(e) {
                 popup
                 .setLatLng(e.latlng)
                 .setContent("You clicked the map at " + e.latlng.toString())
                 .openOn(map);
                }

                map.on('click', onMapClick);
            }
            window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
            };
        </script>        