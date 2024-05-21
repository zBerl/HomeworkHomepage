var video;
var display;

window.onload = function() {
  video = document.getElementById("videoPlayer");

  display = document.getElementById("displayStatus");

  video.onplaying = function() {
    display.innerHTML = "Playing ...";
  }
  video.onpause = function() {
    display.innerHTML = "Paused";
  }
}

function progressUpdate() {
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100)  + "%";
displayStatus.innerHTML = (Math.round(video.currentTime*100)/100) + " sec";
  }

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function speedUp() {
  video.play();
  video.playbackRate = 2;
}

function slowDown() {
  video.play();
  video.playbackRate = 0.5;
}

function normalSpeed() {
  video.play();
  video.playbackRate = 1;
}

function mute() {
  video.muted = true;
}

function unmute() {
  video.muted = false;
}

function rewind() {
  video.currentTime -= .5;
}

function forward() {
  video.currentTime += .5;
}

function TheaterMode() {
  video.width = 800;
}

function normalMode() {
  video.width = 448;
}




