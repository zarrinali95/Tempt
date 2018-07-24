var timeoutHandle;
function countdown() {
    var seconds = 60;
    var mins = document.getElementById('min');
    var num_min = Number(mins.value);
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = num_min-1
        seconds--;

        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {

            if(mins > 1){

         setTimeout(function () { countdown(mins - 1); }, 1000);

            }
        }
    }
  tick();
}
