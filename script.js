// This function runs when the page loads
function startCountdown() {
    // Set the target time: December 30, 2025 at 19:30 UTC+1
    // We need to create a date in your timezone (UTC+1, which is Central European Time)
    const targetDate = new Date('2025-12-30T20:00:00+01:00');
    
    // This function updates the timer every second
    function updateTimer() {
        // Get the current time
        const now = new Date();
        
        // Calculate how much time is left
        const timeLeft = targetDate - now;
        
        // If time is up
        if (timeLeft <= 0) {
            // Hide the timer
            document.querySelector('.timer-box').classList.add('hidden');
            
            // Show the reveal content (the button and message)
            document.getElementById('reveal-content').classList.remove('hidden');
            
            // Stop updating the timer
            clearInterval(timerInterval);
            return;
        }
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Format the time display with leading zeros (so 5 becomes 05)
        const timeString = 
            String(days).padStart(2, '0') + ':' +
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
        
        // Update the timer on the page
        document.getElementById('timer').textContent = timeString;
        
        // Update every 1000 milliseconds (1 second)
    }
    
    // Call updateTimer immediately (don't wait for the first second to pass)
    updateTimer();
    
    // Then call updateTimer every second
    const timerInterval = setInterval(updateTimer, 1000);
}

// Start the countdown when the page has fully loaded
window.addEventListener('load', startCountdown);
