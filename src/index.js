// timer elements
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");
var hours=document.getElementById("hours");

// controls
var start=document.getElementById("start");
var pause=document.getElementById("pause");
var reset=document.getElementById("reset");

// variables to keep track of the time.
let seconds_counter=0;
let minutes_counter=0;
let hours_counter=0;

let running=true;

// variable to store the setInterval function id
let interval;

// timer function that will be initiated through start_timer function
function timer(){
    if(seconds_counter<10){
        seconds.innerHTML="0"+seconds_counter;
    }
    else{
        seconds.innerHTML=seconds_counter;
    }
    if(minutes_counter<10){
        minutes.innerHTML="0"+minutes_counter;
    }
    else{
        minutes.innerHTML=minutes_counter;
    }
    if(hours_counter<10){
        hours.innerHTML='0'+hours_counter;
    }
    else{
        hours.innerHTML=hours_counter;
    }
    seconds_counter++;
    if(seconds_counter==60){
        minutes_counter++;
        seconds_counter=0
    }
    if(minutes_counter==60){
        minutes_counter=0;
        hours_counter++;
    }
}

// start timer function that will be initiated through click event on start button
function start_timer(){
    if(running){
        interval=setInterval(timer,1000);
        running=false;
    }
}

// pause timer function that will initiated through click event on pause button
function pause_timer(){
    clearInterval(interval);
    running=true;
}

// reset timer function that will be initiated through click event on reset button
function reset_timer(){
    seconds_counter=0;
    minutes_counter=0;
    hours_counter=0;
    seconds.innerHTML='00';
    minutes.innerHTML='00';
    hours.innerHTML='00';
    pause_timer();
}

// event listeners specified for start, pause and reset buttons
start.addEventListener('click',start_timer);
pause.addEventListener('click',()=>{
    running=false;
    pause_timer();
});
reset.addEventListener('click',reset_timer);
