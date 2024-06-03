// variables for buttons
const startStopBtn = document.querySelector('#startbtn');
const resetBtn = document.querySelector('#resetbtn');

//variables for time
let seconds = 0;
let hours = 0;
let minutes = 0;


//leading zeroes variables
let leadSeconds = 0;
let leadHours = 0;
let leadMinutes = 0;


//stopwatch status
timerInterval = 0;
start = false;

//stopwatch function
function stopWatch()
{
    seconds++;
    if(seconds/60 === 1)
    {
        seconds = 0;
        minutes++;
        if(minutes/60 === 1)
        {
            minutes= 0;
            hours++;
        }
    }
    if(seconds<10)
    {
        leadSeconds = "0" + seconds;
    }
    else 
    {
        leadSeconds = seconds;
    }
    if(minutes<10)
    {
            leadMinutes = "0" + minutes;
    }
    else 
    {
        leadMinutes = minutes;
    }
    if(hours<10)
    {
        leadHours = "0" + hours;
    }
    else 
    {
        leadHours = hours;
    }
    let displayTimer = document.getElementById('timer');
    displayTimer.innerText = leadHours + ":" + leadMinutes + ":" + leadSeconds;
}
//window.setInterval(stopWatch,1);

startStopBtn.addEventListener('click', function(){
    if(start===false)
    {
        timerInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-pause" id="pausebtn"></i>`;
        start = true;
    }
    else
    {
        window.clearInterval(timerInterval);
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-play" id="startbtn"></i>`;
        start = false; 
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    start = false;
    document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-play" id="startbtn"></i>`;
});