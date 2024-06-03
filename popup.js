document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startbtn');
    const resetBtn = document.getElementById('resetbtn');

    startBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: 'startStopwatch' });
    });

    resetBtn.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: 'resetStopwatch' });
    });

    // Request the current state of the stopwatch from the background script
    chrome.runtime.sendMessage({ action: 'getState' }, function(response) {
        if (response.running) {
            // If the stopwatch is running, update the UI accordingly
            startBtn.innerHTML = `<i class="fas fa-solid fa-pause" id="pausebtn"></i>`;
        }
    });
});
