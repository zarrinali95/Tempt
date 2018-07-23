
var num = document.getElementById('minutes');
debugger;
function time_convert(num)
 {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var time = hours + ":" + minutes;
  return time;
}

var min = time_convert(num)

function startTimer(){
  ticks = Number(min.value)
  for(var i = ticks; i >= 0; i--){
      console.log(i);
  }
};
