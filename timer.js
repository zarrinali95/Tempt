
function interval() {
  setInterval(time, 60000);
}
//time function called every 60 seconds

function time() {
  //this is the users input in minutes returned as a value
  var distance = parseInt(document.getElementById("minutes").value);
  var minutes =
  document.getElementById("demo").innerHTML =  minutes + "minutes left";
  //if countdown is over, write EXPIRED
  if (distance < 0) {
      clearInterval(interval);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
