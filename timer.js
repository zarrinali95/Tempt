var mins=0;
var counter =0;
var current_minutes =0;
var seconds = 60;
var pauseBool = false;
var pressOnce=false;

function textReset(){
  document.getElementById('min').value = '';
  document.getElementById('taskList').value = '';
  console.log("textReset is working");
}

function reset(){
  mins = document.getElementById('min');
  num_min = Number(mins.value);
  counter = document.getElementById("timer");
  current_minutes = num_min-1;
  seconds = 60;

}

function pause() {
  console.log("pause works")
  if (pauseBool==false){
    pauseBool=true;
    document.getElementById("resetButton").disabled = true;
  }else{
    pauseBool=false;
  }
  if (pauseBool==false){
    document.getElementById("resetButton").disabled = false;
    tick();
  }
}

function disableStart() {
    document.getElementById("startButton").disabled = true;

}

//our function
/*function tick() {
    if (pauseBool==true){
      return true;
    }
     disableStart();
     mins = document.getElementById('min');
     num_min = Number(mins.value);
     counter = document.getElementById("timer");
     current_minutes = num_min-1;
     console.log(seconds)
     seconds--;

    //  counter.innerHTML.style.color="lightgreen";
      counter.innerHTML ='<span class="clockDOM">'+current_minutes.toString()+ ":" +(seconds < 10 ? "0" : "") + String(seconds)+'</span>';
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
            console.log("chrome notifications");
        } else {
          if(mins >= 1){
 -         setTimeout(function () { countdown(mins - 1); }, 1000);
            num_min-=1;
            seconds = 59;
            tick();
          } else {
              let options = {
                type : "basic",
                title: "Tempt",
                message: "Your time for this session is up",
                iconUrl: "images/get_started32.png"
              }
              chrome.notifications.create(options);
              console.log("notification works")
          }

      }
}*/

//working model function
var display;

function ticks(duration) {
  if (pauseBool==true){
    return true;
  }
   disableStart(); //might need to put disable somewhere else

   var timer = getInputMinutes();
   setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);
        var strMinutes = minutes < 10 ? "0" + minutes : minutes;
        var strSeconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = '<span class="clockDOM">'+ strMinutes + ":" + strSeconds+'<span>';

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


//returns the seconds value of the number that the user inputs
function getInputMinutes() {
  input = document.getElementById("min");
  return Number(input.value) * 60;
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('startButton').addEventListener('click', () => ticks(userMinutes));
  // document.getElementById('pauseButton').addEventListener('click', () => pause);
  mins = document.getElementById("min");
  num_min = Number(mins.value);
  var userMinutes = 60 * num_min;
  display = document.getElementById('timer');
  // startTimer(userMinutes);
});

//counter.innerHTML ='<span class="clockDOM">'+current_minutes.toString()+ ":" +(seconds < 10 ? "0" : "") + String(seconds)+'</span>';
