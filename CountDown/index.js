let timerInterval; // Variable to store the interval ID
let isRunning = false; // Variable to track the timer status
let sec = 0; // Seconds counter
let min = 0; // Minutes counter
let hr = 0;  // Hours counter

function handleStart() {
    const second = document.querySelector('.second');
    const hour = document.querySelector('.hr');
    const minute = document.querySelector('.minute');
    const button = document.querySelector('button');

    if (isRunning) {
        // Stop the timer
        clearInterval(timerInterval);
        isRunning = false;
        button.textContent = 'Continue'; // Change button text to 'Continue'
    } else {
        // Start or continue the timer
        timerInterval = setInterval(() => {
            // Update the seconds display
            second.innerHTML = sec;
            sec++;

            // Update minutes and seconds
            if (sec % 60 === 0) {
                min++;
                sec = 0;
            }

            // Update hours and minutes
            if (min % 60 === 0 && min !== 0) {
                hr++;
                min = 0; // Reset minutes when incrementing hours
            }

            // Update the display
            minute.innerHTML = min;
            hour.innerHTML = hr;
        }, 1000); // 1000 milliseconds = 1 second

        isRunning = true;
        button.textContent = 'Stop'; // Change button text to 'Stop'
    }
}
function handleReset() {
    const second = document.querySelector('.second');
    const hour = document.querySelector('.hr');
    const minute = document.querySelector('.minute');
    const button = document.querySelector('button');

    // Stop the timer if running
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        button.textContent = 'Start'; // Change button text to 'Start'
    }

    // Reset the counters
    sec = 0;
    min = 0;
    hr = 0;

    // Update the display
    second.innerHTML = '00';
    minute.innerHTML ='00';
    hour.innerHTML ='00';
}



