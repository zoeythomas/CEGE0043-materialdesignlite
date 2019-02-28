function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
getPort();
}, false);
}

function trackAndCircle(){
trackLocation()
addPointLinePoly()
getEarthquakes()
loadW3HTML()
}

function loadW3HTML() {
w3.includeHTML();
}