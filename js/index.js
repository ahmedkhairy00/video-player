'use strict';

const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.querySelector('.progress-bar');
const timesTamp = document.getElementById('timestamp');
const progressValue = document.querySelector('.progress-bar .progress-value');
 

//addEvent Listener
video.addEventListener('click' , toggleVideoStatus);
video.addEventListener('pause' , updatePlayIcon);
video.addEventListener('play' , updatePlayIcon);
video.addEventListener('timeupdate' , updateProgress);



playBtn.addEventListener('click' , toggleVideoStatus);

stopBtn.addEventListener('click' , stopVideo);

progress.addEventListener('click' , setVideoProgress);



console.log(progress.getClientRects()[0].width);
//Functions

function toggleVideoStatus(){
    video.paused ? video.play() : video.pause();
};
function updatePlayIcon(){
 video.paused ? playBtn.innerHTML = `<i class ="fa fa-play fa-2x"> </i>` : playBtn.innerHTML = `<i class ="fa fa-pause fa-2x"> </i>`;
 ;
}

function updateProgress (){
  
const percentage = (video.currentTime / video.duration) * 100 ;
progressValue.style.width = `${percentage}%`;
 //Get minutes
 let mins =Math.floor(video.currentTime / 60);
 if (mins < 10) {
    mins = '0' + String(mins);
 } 

 let secs =Math.floor(video.currentTime % 60);
 if (secs < 10) {
    secs = '0' + String(secs);
 }

 timesTamp.innerHTML = `${mins}:${secs}`;
}

function stopVideo(){
 video.currentTime = 0;
 video.pause();
}

function setVideoProgress(e){
   console.log(e.target);
   if(e.target.closest('progress-bar')) return;
   const progressWidth = progress.getClientRects()[0].width;
   console.log(progressWidth);
   const clickX = e.offsetX;
   console.log(clickX);
   const percentage = (clickX / progressWidth) * 100;
   video.currentTime = (video.duration / 100) * percentage;
  
}
