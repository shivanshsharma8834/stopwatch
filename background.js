
let running;
localStorage.setItem('running', 'false');

let seconds = 0;
let minutes = 0;
let hours = 0;

function stopwatch_background_callback() {

    seconds = localStorage.getItem('seconds');
    minutes = localStorage.getItem('minutes');
    hours = localStorage.getItem('hours');

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

function run_state_checker() {
    running = localStorage.getItem('running');

    if (running == 'true') {
        console.log('Clock is running.');
        stopwatch_background_callback();
    } else if (running == 'false') {
        console.log('Clock has stopped.');
    }
}

setInterval(run_state_checker, 1000);





