function trackAndCircle(){
trackLocation()
addPointLinePoly()
getEarthquakes()
}
//必须要将trackAndCircle套在getport之中不然无法得到portnumber

function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle (); //#如果要得到portnumber就别在startup中call trackAndCircle
getPort();
}, false);
}


function loadW3HTML() {
w3.includeHTML();
}
//startup时把表格导入index里面