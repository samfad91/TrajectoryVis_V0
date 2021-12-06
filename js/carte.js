 function affichage (obj) {

var cbs = document.getElementsByClassName("cb");

if (cbs[0].checked = true) {
var map = L.map('map').setView([30.87, 112.475], 8);

var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                        }).addTo(map);


addressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
address =address.map(function (p) { return [p[0], p[1]]; });
adr =adr.map(function (p) { return [p[0], p[1]]; });

var heat = L.heatLayer(addressPoints).addTo(map);
var heath = L.heatLayer(address).addTo(map);
var heah = L.heatLayer(adr).addTo(map);
}
else{
  if (cbs[1].checked = true) {
     var lat = 36.705615;//ESI Alger
            var lon = 3.173830;
            var lat1= 35.2097704 ;//ESI SBA
            var lon1= -0.635364;
            var lat2= 36.724772;  //Tizi OUZOU
            var lon2 = 4.039124;
            var lat3 = 36.494504;  //Blida
            var lon3 = 2.803623;
            var carte = null;

            // Fonction d'initialisation de la carte
            function initMap() {
                // Créer l'objet "carte" et l'insèrer dans l'élément HTML qui a l'ID "macarte"
                carte = L.map('maCarte').setView([lat, lon], 6);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(carte);

                //ajouter un marqueur
                var marqueur = L.marker(trajet[10,10]).addTo(carte);
               marqueur.bindPopup("<h2>ESI Alger</h2>");

               var marqueur1 = L.marker(trajet[1,1]).addTo(carte);
              marqueur1.bindPopup("<h2>ESI SBA</h2>");


               var points = [
                                [lat,lon],
                                [lat1,lon1],

               ]
//inserer la ligne
trajet =trajet.map(function (p) { return [p[0], p[1]]; });
               var route = L.polyline(trajet,
                                              {
                                                color: 'green'
                                              }

               ).addTo(carte)

               var circle = L.circle([lat3, lon3], {
                 color: 'red',
                 fillColor: '#f03',
                 fillOpacity: 0.5,
                 radius: 50000
               }).addTo(carte);
                circle.bindPopup("<h2> Blida </h2>");


               var polygon = L.polygon([
                 [lat2, lon2],
                 [lat3, lon3],
                 [lat, lon]
               ]).addTo(carte);
               polygon.bindPopup("<h2> zone</h2>");


               var popup = L.popup();

               function onMapClick(e) {
                 popup
                 .setLatLng(e.latlng)
                 .setContent("You clicked the map at " + e.latlng.toString())
                 .openOn(carte);
                }

                carte.on('click', onMapClick);
            }
            window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
            };
  }

}
  if (cbs[2].checked = true) {

    var lat = 36.705615;//ESI Alger
            var lon = 3.173830;
            var carte = null;

            // Fonction d'initialisation de la carte
            function initMap() {
                // Créer l'objet "carte" et l'insèrer dans l'élément HTML qui a l'ID "macarte"
                carte = L.map('maCarte').setView([lat, lon], 6);
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // le lien vers la source des données
                    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(carte);

               var popup = L.popup();

               function onMapClick(e) {
                 popup
                 .setLatLng(e.latlng)
                 .setContent("You clicked the map at " + e.latlng.toString())
                 .openOn(carte);
                }

                carte.on('click', onMapClick);
            }
            window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
            };
  }


             };
/*




 <div>
                  
                     <label for="opt1"> <h5>Heath Map</h5> </label>
      
                    <input class="cb" name="fries" type="checkbox" id="opt1" onchange="cbChange(this)" />
                  
        </div>

              <div>
                <label for="opt2"> <h5>Lignes</h5> </label>
           <input class="cb" type="checkbox" name="fries" id="opt2" onchange="cbChange(this)"/>
              
              </div>
              <div>
                <label for="opt3"> <h5>Graphe</h5> </label>
           <input class="cb" type="checkbox" name="fries" id="opt3" onchange="cbChange(this)"/>
              
              </div>

              <div>
                <label for="opt4"> <h5>Solution</h5> </label>
           <input class="cb" type="checkbox" name="fries" id="opt4" onchange="cbChange(this)"/>
              
              </div>  */
              