var interval = setInterval(time, 1000);

function time() {
  var distance = parseInt(document.getElementById("minutes").value);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

  document.getElementById("demo").innerHTML =  minutes + "m ";
  if (distance < 0) {
        clearInterval(interval);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
}
