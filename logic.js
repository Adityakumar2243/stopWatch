const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    ms = parseInt(ms);

    ms = ms + 1;

    if(ms == 100){
        sec = sec + 1;
        ms = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      ms = 0;
    }

    if (ms < 10 || ms == 0) {
      ms = '0' + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML =  min + ':' + sec + '.' + ms;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    const ask = confirm("Do you really want to reload your page");
    if(ask){
        window.location.reload(true);
    }
    timer.innerHTML = '00:00.00';
}