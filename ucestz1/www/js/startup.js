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
}