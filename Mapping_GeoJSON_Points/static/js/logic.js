// Add console.log to check if our code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([30, 30], 2.45);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Accessing the airpot GeoJSON URL
let airportData = "https://raw.githubusercontent.com/jsheppard95/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.marker(latlng).bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name);
        }
    }).addTo(map);
});