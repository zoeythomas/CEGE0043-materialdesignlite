// create a variable that will hold the XMLHttpRequest() - this must be done outside a function so that all the functions can use the same variable
var client;
// and a variable that will hold the layer itself – we need to do this outside the function so that we can use it to remove the layer later on
var forms;
// create the code to get the Earthquakes data using an XMLHttpRequest

function getFormData() {
client = new XMLHttpRequest();
var url = "http://developer.cege.ucl.ac.uk:" + httpPortNumber + "/getGeoJSON/" + "london_poi/" + "geom/";
alert(url)
client.open('GET', url, true);
client.onreadystatechange = formdataResponse; // note don't use earthquakeResponse() with brackets as that doesn't work
client.send();
alert(url)
}


// create the code to wait for the response from the data server, and process the response once it is received
function formdataResponse() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// once the data is ready, process the data
var formdata = client.responseText;
loadFormdata(formdata);
}
}

// define a global variable to hold the layer so that we can use it later on
var formlayer;
// convert the received data - which is text - to JSON format and add it to the map
function loadFormdata(formdata) {
// convert the text received from server to JSON
var formjson = JSON.parse(formdata);

forms = formjson;

// load the geoJSON layer using custom icon
formlayer = L.geoJson(formjson).addTo(mymap);
// change the map zoom so that all the data is shown
mymap.fitBounds(formlayer.getBounds());
}