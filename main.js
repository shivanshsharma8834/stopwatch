// variables for buttons
const startStopBtn = document.querySelector('#startbtn');
const resetBtn = document.querySelector('#resetbtn');

// leading zeroes variables
let leadSeconds = 0;
let leadHours = 0;
let leadMinutes = 0;

//stopwatch status
timerInterval = 0;
let start = localStorage.getItem('running');


function printTimer() {

    let seconds = localStorage.getItem('seconds');
    let minutes = localStorage.getItem('minutes');
    let hours = localStorage.getItem('hours');

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

    if (start == 'true') {
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-pause" id="pausebtn"></i>`;
    } else {
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-play" id="startbtn"></i>`;
    }
}

startStopBtn.addEventListener('click', function(){
    if(start == 'false')
    {
        localStorage.setItem('running', 'true');
        start = 'true';
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-pause" id="pausebtn"></i>`; // Swaps the image to that of the pause button
        
    }
    else
    {
        // window.clearInterval(timerInterval);
        localStorage.setItem('running', 'false');
        document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-play" id="startbtn"></i>`; // Swaps the image to that of the start button 
        start = 'false'; 
    }
});

resetBtn.addEventListener('click', function(){
    // window.clearInterval(timerInterval);
    localStorage.setItem('seconds', 0);
    localStorage.setItem('minutes', 0);
    localStorage.setItem('hours', 0);

    document.getElementById('timer').innerHTML = "00:00:00";
    start = 'false';
    document.getElementById('startbtn').innerHTML = `<i class="fas fa-solid fa-play" id="startbtn"></i>`;
});

document.addEventListener('DOMContentLoaded', function() {
    setInterval(printTimer, 1000);
  });


