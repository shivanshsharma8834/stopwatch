// let leadSeconds = 0;
// let leadMinutes = 0;
// let leadHours = 0;

let running = localStorage.setItem('running', true);

let seconds = 0;
let minutes = 0;
let hours = 0;

function stopwatch_background_callback() {

    // let seconds = localStorage.getItem('seconds');
    // let minutes = localStorage.getItem('minutes');
    // let hours = localStorage.getItem('hours');

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
    console.log(hours, minutes, seconds);
    localStorage.setItem('seconds', seconds);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('hours', hours);

}

if (localStorage.getItem('running')) {
    setInterval(stopwatch_background_callback, 1000);
    console.log("Running");
}
