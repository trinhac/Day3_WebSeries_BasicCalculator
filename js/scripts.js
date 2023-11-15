let monitor = document.getElementById('calculator-monitor');
// monitor.value='0'
function appendToMonitor(value) {
    monitor.value += value;
}

function clearMonitor() {
    monitor.value = '0';
}

function calculate() {
    try {

        monitor.value = eval(monitor.value);
    } catch (error) {
        monitor.value = 'Error';
    }
}
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

