//Google marker have to fix zoom and center
var map;
var contentString;
var infowindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
    });

    setMarkers(map, blank);
}

function setMarkers(map, markers) {

    for (var i = 0; i < markers.length; i++) {
        var p = markers[i];
       var  marker = new google.maps.Marker({
            position: { lat: p[1], lng: p[2] },
            map: map,
            title: p[0],
            zIndex: p[3],
            information: p[4] 
       });
       
       infowindow = new google.maps.InfoWindow({
           content: contentString
       });
       marker.addListener('click', function () {
           infowindow.setContent(this.information);
           infowindow.open(map, this);
       });
    }

   

} var All = [
 //invercargill Attractions
 ['Bill Richardsons Transport World', -46.40933829999999, 168.37959810000007, 1, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Bill Richardsons Transport World<p>\'" />'],
 ['Southland Museum & Art Gallery', -46.40524659999999, 168.3537099, 2, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Southland Museum & Art Gallery<p>\'" />'],
 ['Rakiura Rides', -46.435518, 168.267024, 3, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Rakiura Rides\'" />'],
 ['Queens Park', -46.402306, 168.3538523, 4, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Queens Park\'" />'],
 ['Invercargill i-Site Visitor Information Center', -46.405457, 168.3528598, 5, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Invercargill i-Site Visitor Information Center<p>\'" />'],
 ['Invercargill Water Tower', -46.407629, 168.360611, 6, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Invercargill Water Tower<p>\'" />'],
 ['Oreti Beach', -46.437701, 168.238407, 8, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Oreti Beach<p>\'" />'],
 ['Demolition World', -46.452417, 168.379052, 9, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Demolition World<p>\'" />'],
 ['St. Marys Basilica', -46.415833, 168.350936, 10, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>St. Marys Basilica<p>\'" />'],
 ['South African War Memorial', -46.413037, 168.347290, 11, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>South African War Memorial<p>\'" />'],
 ['Invercargill Cenotaph', -46.406097, 168.347918, 12, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Invercargill Cenotaph<p>\'" />'],
 ['City Gallery', -46.410648, 168.349033, 13, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>City Gallery<p>\'" />'],
 ['Anderson Park Art Gallery', -46.361516, 168.360772, 14, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Anderson Park Art Gallery<p>\'" />'],
 ['Otepuni Gardens', -46.415356, 168.355438, 15, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Otepuni Gardens<p>\'" />'],
 ['St Pauls Presbyterian Church', -46.407161, 168.347037, 16, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>St Pauls Presbyterian Church<p>\'" />'],
 ['First Presbytarian Church', -46.413427, 168.356531, 17, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>First Presbytarian Church<p>\'" />'],
 ['Rugby Park', -46.417579, 168.362657, 18, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Rugby Park<p>\'" />'],
 ['Turnbull Thompson Park', -46.413141, 168.374664, 19, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Turnbull Thompson Park<p>\'" />'],

 //te anau attractions
 ['Glow Worm Caves', -45.295061, 167.727179, 20, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Glow Worm Caves<p>\'" />'],
 ['Real Journeys (Glow Worm Caves)', -45.417320, 167.711657, 21, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Real Journeys (Glow Worm Caves)<p>\'" />'],
 ['Kepler Track', -45.4423408, 167.679988, 22, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Kepler Track<p>\'" />'],
 ['Lake Te Anau', -45.223570, 167.767774, 23, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lake Te Anau<p>\'" />'],
 ['Te Anau Bird Sanctuary', -45.433655, 167.714173, 24, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Te Anau Bird Sanctuary<p>\'" />'],
 ['Milford Sound', -44.671103, 167.925660, 25, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Milford Sound<p>\'" />'],
 ['Doubtful Sound', -45.321520, 166.986696, 26, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Doubtful Sound<p>\'" />'],
 ['Routeburn Track', -44.718515, 168.278447, 27, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Routeburn Track<p>\'" />'],
 ['Holyford Track', -44.681109, 168.119009, 28, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Holyford Track<p>\'" />'],

 //bluff attractions
 ['Shark Dive New Zealand', -46.598947, 168.346309, 29, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Shark Dive New Zealand<p>\'" />'],
 ['Bluff Hill', -46.615045, 168.338597, 30, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Bluff Hill<p>\'" />'],
 ['Stirling Point', -46.613317, 168.357421, 31, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Stirling Point<p>\'" />'],
 ['Bluff Maratime Museum', -46.596194, 168.331870, 32, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Bluff Maratime Museum<p>\'" />'],
 ['The Lighthouse', -46.612054, 168.359271, 33, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>The Lighthouse<p>\'" />'],

 //gore attractions
 ['Fly Fish Mataura', -46.082546, 168.962821, 34, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Fly Fish Mataura<p>\'" />'],
 ['Croydon Aircraft Company', -45.991164, 168.811495, 35, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Croydon Aircraft Company<p>\'" />'],
 ['Gore information Center', -46.097422, 168.945897, 36, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Gore information Center<p>\'" />'],
 ['Hokonui Moonshine Museum', -46.097599, 168.945653, 37, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Hokonui Moonshine Museum<p>\'" />'],
 ['Eastern Southland Gallery', -46.098037, 168.945914, 38, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Eastern Southland Gallery<p>\'" />'],
 ['Gore Public Gardens', -46.097471, 168.942095, 39, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Gore Public Gardens\'" />'],
 ['Bannerman Park', -46.092945, 168.937157, 40, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Bannerman Park<p>\'" />'],
 ['Dolamore Park', -46.062419, 168.827306, 41, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Dolamore Park<p>\'" />'],
 ['Gore Multisport Complex', -46.111664, 168.929427, 42, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Gore Multisport Complex<p>\'" />'],

 //other
 ['Waipapa Point Lighthouse', -46.660021, 168.847068, 43, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Waipapa Point Lighthouse<p>\'" />'],
 ['Milford Track', -44.683632, 167.902165, 44, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Milford Track<p>\'" />'],
 ['Homer tunnel', -44.7648458, 167.987291, 45, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Homer tunnel<p>\'" />'],
 ['Cathedral Caves', -46.604091, 169.374625, 46, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Cathedral Caves<p>\'" />'],
 ['Cannibal Bay', -46.471601, 169.759477, 47, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Cannibal Bay<p>\'" />'],
 ['Monek Island', -46.300017, 167.725005, 48, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Monek Island<p>\'" />'],
 ['Humboldt Falls', -44.695962, 168.133800, 49, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Humboldt Falls<p>\'" />'],
 ['Mitre Peak', -44.627134, 167.838758, 50, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Mitre Peak<p>\'" />'],
 ['Lignite Pit Café & Gardens', -46.467217, 168.657983, 51, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lignite Pit Café & Gardens<p>\'" />'],
 ['Mavora Lakes', -45.517535, 167.970206, 52, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Mavora Lakes<p>\'" />'],
 ['Stead Street Wharf', -46.418488, 168.338303, 53, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Stead Street Wharf<p>\'" />'],
 ['Colac Bay', -46.363017, 167.881087, 54, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Colac Bay<p>\'" />'],
 ['McCrackens Rest', -46.228178, 167.669062, 55, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>McCrackens Rest<p>\'" />'],
 ['Te Anau Machinery museum', -45.410953, 167.734942, 56, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Te Anau Machinery museum<p>\'" />'],
 ['Toetoes Bay', -46.588766, 168.732472, 57, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Toetoes Bay<p>\'" />'],
 ['Clifden Caves', -46.018251, 167.740493, 58, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Clifden Caves<p>\'" />'],
 ['Lake Gunn', -44.876378, 168.089990, 59, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lake Gunn<p>\'" />'],
 ['Lake Marion', -44.786262, 168.075854, 60, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lake Marion<p>\'" />'],


 //riverton attractions
 ['Te Hikoi Southern Journey', -46.352065, 168.013381, 61, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Te Hikoi Southern Journey<p>\'" />'],
 ['Howells Point Reserve', -46.365560, 168.019570, 62, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Howells Point Reserve<p>\'" />'],

 //manapouri attractions
 ['Doubtful Sound Cruises', -45.568972, 167.610818, 63, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Doubtful Sound Cruises<p>\'" />'],
 ['Fiordland Expeditions -Tours', -45.569267, 167.610403, 64, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Fiordland Expeditions Tours<p>\'" />'],

 //Tuatapere attractions
 ['Hump Ridge Track', -46.131922, 167.689458, 65, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Hump Ridge Track<p>\'" />'],
 ['Wairaurahiri Jet', -45.931377, 167.033101, 66, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Wairaurahiri Jet<p>\'" />'],
 ['Clifden Suspension Bridge', -46.118602, 167.678228, 67, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Clifden Suspension Bridge<p>\'" />'],
 ['Lake Hauroko', -45.957824, 167.306614, 68, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lake Hauroko<p>\'" />'],
 ['Lake Manowai', -45.862746, 167.464894, 69, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Lake Manowai<p>\'" />'],


 //stewart island attractions
 ['Ulva Island', -46.931835, 168.125340, 70, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Ulva Island<p>\'" />'],
 ['Stewart Island Experience', -46.598423, 168.345754, 71, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Stewart Island Experience<p>\'" />'],
 ['Oban Visitor Center', -46.896896, 168.129329, 72, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Oban Visitor Center<p>\'" />'],
 ['Ruggedy Range Wilderness Experience', -46.897719, 168.126286, 73, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Ruggedy Range Wilderness Experience<p>\'" />'],
 ['Butterfield Beach', -46.891007, 168.132538, 74, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Butterfield Beach<p>\'" />'],

 //Waikawa attractions
 ['Slope Point', -46.659642, 169.009947, 75, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Slope Point<p>\'" />'],
 ['Curio Bay', -46.655290, 169.101027, 76, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Curio Bay<p>\'" />'],
 ['Waikawa Museum and Information Center', -46.623418, 169.133370, 77, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' <p>Waikawa Museum and Information Center<p>\'" />']

];
var InformationCenters = [
['Invercargill i-Site Visitor Information Center', -46.4054805, 168.3511944, 1, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Invercargill i-Site Visitor Information Center\'" />'],
['Gore information Center', -46.097422, 168.945897, 2, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Gore information Center\'" />'],
['Te Anua Information Center', -45.416722, 167.712465, 3, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Te Anua Information Center\'" />'],
['Oban Visitor Center', -46.8968849, 168.1271469, 4, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Oban Visitor Center\'" />'],
['Waikawa Museum and Information Center', -46.6234101, 169.1244878, 5, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Waikawa Museum and Information Center\'" />']
];

var Museum = [
['Bill Richardsons Transport World', -46.4094892, 168.3623194, 1, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Bill Richardsons Transport World\'" />'],
['Demolition World', -46.4523882, 168.3768669, 2, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Demolition World\'" />'],
['Hokonui Moonshine Museum', -46.0975587, 168.9435337, 3, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Hokonui Moonshine Museum\'" />'],
['Bluff Maritime Museum', -46.5962983, 168.3296413, 4, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Bluff Maritime Museum\'" />'],
['Te Hikoi Southern Journey	Museum', -46.3520589, 168.0112016, 5, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Te Hikoi Southern Journey	Museum\'" />']
];

var sightSeeing = [
    ['Invercargill Water Tower', -46.4095249, 168.3496275, 1, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Invercargill Water Tower\'" />'],
    ['St. Marys Basilica', -46.4158173, 168.3487542, 2, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' St. Marys Basilica\'" />'],
    ['South African War Memorial', -46.413037, 168.347290, 3, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' South African War Memorial\'" />'],
    ['Invercargill Cenotaph', -46.406091, 168.347897, 4, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Invercargill Cenotaph\'" />'],
    ['St Pauls Presbyterian Church', -46.4071203, 168.3448788, 5, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' St Pauls Presbyterian Church\'" />'],
    ['First Presbytarian', -46.413427, 168.356531, 6, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' First Presbytarian\'" />'],
    ['Bluff Hill', -46.5988093, 168.3113077, 7, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Bluff Hill\'" />'],
    ['Stirling Point', -46.6134438, 168.3551091, 8, '<input type="button" id="theButton" value="add to trip" onclick="document.getElementById(\'trip\').innerHTML += \' Stirling Point\'" />']
];
var outDoors = [

];

var blank = [];