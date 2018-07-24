
var mins=0;
var njum_mins=0;
var counter =0;
var current_minutes =0;
var seconds = 0;

window.onload = function() {
  console.log("This works")
  document.addEventListener('click', function () {
  document.getElementById('timerButton').addEventListener('click', reset);
});
};

function reset(){
  mins = document.getElementById('min');
  num_min = Number(mins.value);
  counter = document.getElementById("timer");
  current_minutes = num_min-1;
  seconds = 60;
  tick();
}

function tick() {
    seconds-=1;
    mins-=1;
    counter.innerHTML =
    current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if( seconds > 0 ) {
        setTimeout(tick, 1000);
    } else {
        min-=1;
        seconds = 59
        tick();
      }
    }
