var popup = L.popup();
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var attrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
var greenIcon = L.icon({ iconUrl: '../../images/marker-icon.png' });
var oczyszczlnia = L.icon({ iconUrl: '../../images/wodo.png' });
var podklad = L.tileLayer(osmUrl, { id: 'MapID', attribution: attrib });
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
var baseMaps = {
    "Plan miasta OPENSTREET": podklad,
    "Google Streets": googleStreets,
    "Google Sattelite": googleSat,
    "Google Teren": googleTerrain
}
var maxb = ([
[53.354108, 15.439117],
[51.504531, 15.716794]
])
var map = L.map('map', {drawControl:false, attributionControl: false, boxZoom: true, minZoom: 11, maxBounds: maxb, });
var legendControl = (new L.Control.TileLegend()).addTo(map)
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);
var size = 10000;
var option = {
    maxClusterRadius: 20,
    spiderfyOnMaxZoom: true,
}
var markery = L.markerClusterGroup(option);
var markers = [];
map.addLayer(podklad).setView([52.444635, 15.577912], 20);
L.control.layers(baseMaps, null, { collapsed: false }).addTo(map);
L.control.scale({ imperial: false }).addTo(map);
map.fitBounds([
[53.354108, 15.439117],
[51.504531, 15.716794]
]);
map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    if (type === 'marker') {
        // Do marker specific actions
    }

    // Do whatever else you need to. (save to db, add to map etc)
    map.addLayer(layer);
});
map.on('draw:edited', function (e) {
    var layers = e.layers;
    layers.eachLayer(function (layer) {
        //do whatever you want, most likely save back to db
    });
});
L.control.mousePosition().addTo(map);
L.marker([52.453921, 15.562009], { icon: oczyszczlnia }).bindPopup('<span style="color:blue"><b>Oczyszczalnia</b></span><br/><a href="http://www.mpwik.org">strona:www.mpwik.org</a><br/><a href="https:\\ibo.mpwik.org">Portal</a>').addTo(map);
L.marker([52.428427, 15.595955], { icon: oczyszczlnia }).bindPopup('<span style="color:blue"><b>Stacja uzdatniania wody</b></span><br/><br/><a href="https:\\ibo.mpwik.org">Monitoring</a>').addTo(map);