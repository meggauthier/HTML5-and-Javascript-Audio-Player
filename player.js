// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
	startPlayer();
}, false);

var player;

fucntion startPlayer() {
	player.controls = false;
	
}

function playAudio() {
	
	player.play();
}

function pauseAudio() {
	
	player.pause();
}


function stopAudio() {
	
	player.pause();
	player.currentTime = 0;
}

function changeVolume() {
	player.volume=document.getElementById("changeVolume").value;
}
