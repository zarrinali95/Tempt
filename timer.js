
var mins=0;
var njum_mins=0;
var counter =0;
var current_minutes =0;
var seconds = 60;
var pauseBool = false;
var pressOnce=false;


window.onload = function() {

  document.addEventListener('click', function () {
        document.getElementById('timerButton').addEventListener('click', tick);
        document.getElementById('resetButton').addEventListener('click', reset);
        document.getElementById('pauseButton').addEventListener('click', pause);
      });

};

function reset(){
  mins = document.getElementById('min');
  num_min = Number(mins.value);
  counter = document.getElementById("timer");
  current_minutes = num_min-1;
  seconds = 60;
}

function pause(){
  console.log("pause works")
  if (pauseBool==false){
    pauseBool=true;
  }else{
    pauseBool=false;
  }
  if (pauseBool==false){
    tick();
  }
}
function disbaleStart() {
    document.getElementById("timerButton").disabled = true;
}
<<<<<<< HEAD

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
=======
function tick() {
    if (pauseBool==true){
      return true;
    }
    disbaleStart();
      mins = document.getElementById('min');
      num_min = Number(mins.value);
      counter = document.getElementById("timer");
      current_minutes = num_min-1;
      console.log(seconds)

      seconds--;


      counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {

            if(mins > 1){
         setTimeout(function () { countdown(mins - 1); }, 1000);

            }

      }
}
>>>>>>> dcce519ede23a574f2c12da930a38e67d9493ab0
